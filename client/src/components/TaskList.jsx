import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle, onEdit, isOverdue }) => {
  if (tasks.length === 0) {
    return (
      <div className="border-[3px] border-dashed border-black bg-gray-50 p-12 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
          No tasks match your filters
        </p>
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
