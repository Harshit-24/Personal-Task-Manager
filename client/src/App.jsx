import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskStats from "./components/TaskStats";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import taskService from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && deleteConfirmId) {
        setDeleteConfirmId(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [deleteConfirmId]);

  const fetchTasks = async () => {
    try {
      const data = await taskService.getTasks();
      const sortedData = [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
      setTasks(sortedData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const newTask = await taskService.createTask(taskData);
      setTasks((prevTasks) => [newTask, ...prevTasks]);
      return true;
    } catch (error) {
      console.error("Error creating task:", error);
      throw error;
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      const updatedTask = await taskService.updateTask(id, taskData);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task)),
      );
      setEditingTask(null);
      return true;
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteConfirmId(id);
  };

  const handleConfirmDelete = async () => {
    if (!deleteConfirmId) return;
    try {
      await taskService.deleteTask(deleteConfirmId);
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== deleteConfirmId),
      );
      if (editingTask?.id === deleteConfirmId) {
        setEditingTask(null);
      }
      setDeleteConfirmId(null);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmId(null);
  };

  const handleToggleTask = async (id) => {
    try {
      const updatedTask = await taskService.toggleTaskStatus(id);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task)),
      );
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        filter === "all" ||
        (filter === "active" && !task.completed) ||
        (filter === "completed" && task.completed);
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const isOverdue = (dueDate) => {
    return (
      new Date(dueDate) < new Date() &&
      new Date(dueDate).toDateString() !== new Date().toDateString()
    );
  };

  const stats = {
    total: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black text-2xl font-bold">LOADING...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <section className="mb-10">
          <p className="mb-3 inline-block border-[2px] border-black bg-black px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            System // Productive
          </p>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl md:leading-[1.1]">
            Stay organized.{" "}
            <span className="inline-block bg-[color:var(--brand)] px-3 py-1">
              Ship faster.
            </span>
          </h2>
        </section>

        <TaskStats stats={stats} />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_400px]">
          <section className="order-2 lg:order-1">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <FilterButtons filter={filter} setFilter={setFilter} />
            </div>

            <TaskList
              tasks={filteredTasks}
              onDelete={handleDeleteClick}
              onToggle={handleToggleTask}
              onEdit={handleEditTask}
              isOverdue={isOverdue}
            />
          </section>

          <aside className="order-1 lg:order-2">
            <TaskForm
              onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
              editingTask={editingTask}
              onCancelEdit={handleCancelEdit}
            />
          </aside>
        </div>
      </main>

      {deleteConfirmId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={handleCancelDelete}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md border-[3px] border-black bg-white p-6 shadow-[5px_5px_0_0_black]"
          >
            <h4 className="text-xl font-bold uppercase tracking-tight">
              Delete task?
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              This action can't be undone. The task will be permanently removed.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleCancelDelete}
                className="flex-1 border-[2px] border-black bg-white py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 border-[2px] border-black bg-red-500 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t-[3px] border-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
            TaskVault // v1.0
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
            Built for clarity
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
