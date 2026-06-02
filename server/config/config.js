const path = require("path");

const config = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "development",
  dataFilePath: path.join(__dirname, "../data/tasks.json"),
  corsOptions: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  },
};

module.exports = config;
