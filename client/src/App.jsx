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

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const newTask = await taskService.createTask(taskData);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleToggleTask = async (id) => {
    try {
      const updatedTask = await taskService.toggleTaskStatus(id);
      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed);
    return matchesSearch && matchesFilter;
  });

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
    overdue: tasks.filter((task) => !task.completed && isOverdue(task.dueDate))
      .length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-600 flex items-center justify-center">
        <div className="text-white text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Header />
        <TaskStats stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <FilterButtons filter={filter} setFilter={setFilter} />
            <TaskList
              tasks={filteredTasks}
              onDelete={handleDeleteTask}
              onToggle={handleToggleTask}
              isOverdue={isOverdue}
            />
          </div>

          <div className="lg:col-span-1">
            <TaskForm onSubmit={handleCreateTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
