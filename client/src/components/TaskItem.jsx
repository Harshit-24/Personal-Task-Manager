const TaskItem = ({ task, onDelete, onToggle, onEdit, isOverdue }) => {
  const taskIsOverdue = !task.completed && isOverdue(task.dueDate);
  const isCompleted = task.completed;

  const formatDate = (dueDate) => {
    if (!dueDate) return null;
    const d = new Date(dueDate);
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className={`border-[3px] bg-white p-5 transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] ${
        taskIsOverdue
          ? "border-red-500 shadow-[4px_4px_0_0_red] bg-red-50"
          : isCompleted
            ? "border-green-600 shadow-[4px_4px_0_0_green] bg-green-50"
            : "border-black shadow-[3px_3px_0_0_black]"
      }`}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggle(task.id)}
          aria-label={isCompleted ? "Mark as active" : "Mark as completed"}
          className={`mt-0.5 flex size-7 shrink-0 items-center justify-center border-[2px] border-black transition-colors ${
            isCompleted
              ? "bg-black text-white"
              : "bg-white hover:bg-[color:var(--brand)]"
          }`}
        >
          {isCompleted && (
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3
              className={`min-w-0 flex-1 break-words text-lg font-bold leading-tight tracking-tight ${
                isCompleted && "line-through opacity-50"
              }`}
            >
              {task.title}
            </h3>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                onClick={() => onEdit(task)}
                aria-label="Edit task"
                className="flex size-7 items-center justify-center border-[2px] border-black bg-white transition-colors hover:bg-[color:var(--brand)]"
              >
                <svg
                  className="size-3.5"
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
              </button>
              <button
                onClick={() => onDelete(task.id)}
                aria-label="Delete task"
                className="flex size-7 items-center justify-center border-[2px] border-black bg-white transition-colors hover:bg-red-500 hover:text-white"
              >
                <svg
                  className="size-3.5"
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

          {(taskIsOverdue || isCompleted) && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {taskIsOverdue && (
                <span className="border-[2px] border-black bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                  Overdue
                </span>
              )}
              {isCompleted && (
                <span className="border-[2px] border-black bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                  Completed
                </span>
              )}
            </div>
          )}

          {task.description && (
            <p
              className={`mt-1.5 max-w-prose text-sm text-gray-600 ${
                isCompleted && "line-through opacity-60"
              }`}
            >
              {task.description}
            </p>
          )}

          {task.dueDate && (
            <div className="mt-3 inline-flex items-center gap-1.5 border-[2px] border-black bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
              {taskIsOverdue ? (
                <svg
                  className="size-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="size-3"
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
              )}
              {formatDate(task.dueDate)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
