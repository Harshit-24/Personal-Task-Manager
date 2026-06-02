const TaskItem = ({ task, onDelete, onToggle, isOverdue }) => {
  const taskIsOverdue = !task.completed && isOverdue(task.dueDate);
  const isCompleted = task.completed;

  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 group ${
        taskIsOverdue
          ? "border-l-4 border-red-500"
          : isCompleted
            ? "opacity-70"
            : "border-l-4 border-transparent hover:border-purple-500"
      }`}
    >
      <div className="flex items-start gap-5">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggle(task.id)}
          className="mt-1.5 w-5 h-5 text-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 cursor-pointer"
        />
        <div className="flex-1 min-w-0">
          <h3
            className={`text-xl font-semibold mb-2 ${
              isCompleted ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>
          {task.description && (
            <p
              className={`text-sm mb-4 leading-relaxed ${
                isCompleted ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {task.description}
            </p>
          )}
          <div className="flex items-center gap-3 flex-wrap">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                taskIsOverdue
                  ? "bg-red-100 text-red-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium">{task.dueDate}</span>
            </div>
            {taskIsOverdue && (
              <span className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-semibold uppercase tracking-wide">
                Overdue
              </span>
            )}
            {isCompleted && (
              <span className="px-3 py-1.5 bg-green-500 text-white rounded-lg text-xs font-semibold uppercase tracking-wide">
                Completed
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onDelete(task.id)}
            className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
