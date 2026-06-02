const { getAllTasks, saveTasks, getTaskById } = require("../utils/fileHandler");
const crypto = require("crypto");

const getTasks = async () => {
  return getAllTasks();
};

const getTask = async (id) => {
  const task = await getTaskById(id);
  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }
  return task;
};

const createTask = async (taskData) => {
  const tasks = await getAllTasks();

  const newTask = {
    id: crypto.randomUUID(),
    title: taskData.title,
    description: taskData.description || "",
    dueDate: taskData.dueDate,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  await saveTasks(tasks);

  return newTask;
};

const updateTask = async (id, taskData) => {
  const tasks = await getAllTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }

  const updatedTask = {
    ...tasks[taskIndex],
    ...taskData,
    id: tasks[taskIndex].id,
    createdAt: tasks[taskIndex].createdAt,
    updatedAt: new Date().toISOString(),
  };

  tasks[taskIndex] = updatedTask;
  await saveTasks(tasks);

  return updatedTask;
};

const deleteTask = async (id) => {
  const tasks = await getAllTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }

  const deletedTask = tasks[taskIndex];
  tasks.splice(taskIndex, 1);
  await saveTasks(tasks);

  return deletedTask;
};

const toggleTaskStatus = async (id) => {
  const tasks = await getAllTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }

  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  tasks[taskIndex].updatedAt = new Date().toISOString();

  await saveTasks(tasks);

  return tasks[taskIndex];
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
};
