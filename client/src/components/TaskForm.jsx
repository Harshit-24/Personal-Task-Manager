import { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editingTask, onCancelEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [titleError, setTitleError] = useState("");
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || "");
      setDueDate(editingTask.dueDate || "");
      setTitleError("");
      setApiError("");
    }
  }, [editingTask]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    if (newTitle.trim().length > 0 && newTitle.trim().length < 3) {
      setTitleError("Title must be at least 3 characters long");
    } else {
      setTitleError("");
    }

    setApiError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setApiError("");

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setTitleError("Title is required");
      return;
    }

    if (trimmedTitle.length < 3) {
      setTitleError("Title must be at least 3 characters long");
      return;
    }

    setTitleError("");

    try {
      const taskData = {
        title,
        description,
      };

      if (dueDate) {
        taskData.dueDate = dueDate;
      }

      if (editingTask) {
        await onSubmit(editingTask.id, taskData);
      } else {
        await onSubmit(taskData);
      }

      setTitle("");
      setDescription("");
      setDueDate("");
      setTitleError("");
      setApiError("");
    } catch (error) {
      console.error("Error submitting task:", error);

      if (error.response?.data?.message) {
        setApiError(error.response.data.message);
      } else if (error.message) {
        setApiError(error.message);
      } else {
        setApiError("Failed to save task. Please try again.");
      }
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setTitleError("");
    setApiError("");
    onCancelEdit();
  };

  const isEditing = editingTask !== null;

  return (
    <div className="sticky top-8 border-[3px] border-black bg-[color:var(--brand)] p-7 shadow-[5px_5px_0_0_black]">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center border-[2px] border-black bg-white">
            {isEditing ? (
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            ) : (
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight">
            {isEditing ? "Edit Task" : "New Task"}
          </h3>
        </div>
        {isEditing && (
          <button
            type="button"
            onClick={handleCancel}
            aria-label="Cancel edit"
            className="flex size-8 items-center justify-center border-[2px] border-black bg-white hover:bg-gray-100"
          >
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {apiError && (
          <div className="border-[2px] border-red-500 bg-red-50 p-3">
            <p className="text-xs font-bold text-red-600">{apiError}</p>
          </div>
        )}

        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em]">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="What needs doing?"
            className="w-full border-[2px] border-black bg-white px-3 py-2.5 text-sm font-medium focus:outline-none"
          />
          {titleError && (
            <p className="text-xs font-bold text-red-600">{titleError}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em]">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="Add details (optional)"
            className="w-full resize-none border-[2px] border-black bg-white px-3 py-2.5 text-sm focus:outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em]">
            Due date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border-[2px] border-black bg-white px-3 py-2.5 text-sm font-medium focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 border-[2px] border-black bg-black py-3 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[3px_3px_0_0_black] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
        >
          {isEditing ? (
            <>
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Save Changes
            </>
          ) : (
            <>
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Task
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
