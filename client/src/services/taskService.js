import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const taskService = {
  getTasks: async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data.data;
  },

  createTask: async (taskData) => {
    const response = await axios.post(`${API_URL}/tasks`, taskData);
    return response.data.data;
  },

  updateTask: async (id, taskData) => {
    const response = await axios.put(`${API_URL}/tasks/${id}`, taskData);
    return response.data.data;
  },

  deleteTask: async (id) => {
    const response = await axios.delete(`${API_URL}/tasks/${id}`);
    return response.data.data;
  },

  toggleTaskStatus: async (id) => {
    const response = await axios.patch(`${API_URL}/tasks/${id}/toggle`);
    return response.data.data;
  },
};

export default taskService;
