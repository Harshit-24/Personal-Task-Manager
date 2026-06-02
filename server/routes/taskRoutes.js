const express = require("express");
const taskController = require("../controllers/taskController");
const validateRequest = require("../middleware/validateRequest");
const {
  createTaskSchema,
  updateTaskSchema,
} = require("../validators/taskValidator");

const router = express.Router();

router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTask);
router.post("/", validateRequest(createTaskSchema), taskController.createTask);
router.put(
  "/:id",
  validateRequest(updateTaskSchema),
  taskController.updateTask,
);
router.delete("/:id", taskController.deleteTask);
router.patch("/:id/toggle", taskController.toggleTaskStatus);

module.exports = router;
