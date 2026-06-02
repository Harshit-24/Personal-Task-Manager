const fs = require("fs").promises;
const config = require("../config/config");

const getAllTasks = async () => {
  try {
    const data = await fs.readFile(config.dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
};

const saveTasks = async (tasks) => {
  await fs.writeFile(
    config.dataFilePath,
    JSON.stringify(tasks, null, 2),
    "utf8",
  );
};

const getTaskById = async (id) => {
  const tasks = await getAllTasks();
  return tasks.find((task) => task.id === id);
};

module.exports = {
  getAllTasks,
  saveTasks,
  getTaskById,
};
