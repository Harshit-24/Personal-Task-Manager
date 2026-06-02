import { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    await onSubmit({ title, description, dueDate });

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 sticky top-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Add details (optional)"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 hover:shadow-lg active:scale-[0.98] transition-all"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
