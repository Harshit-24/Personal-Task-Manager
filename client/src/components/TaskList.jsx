import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle, onEdit, isOverdue }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-12 text-center">
        <p className="text-gray-500 text-lg">No tasks found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
          isOverdue={isOverdue}
        />
      ))}
    </div>
  );
};

export default TaskList;
