const { z } = require("zod");

const createTaskSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  dueDate: z.string().datetime().optional(),
});

const updateTaskSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").optional(),
  description: z.string().optional(),
  dueDate: z.string().datetime().optional(),
  completed: z.boolean().optional(),
});

module.exports = {
  createTaskSchema,
  updateTaskSchema,
};
