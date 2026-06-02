const app = require("./app");
const config = require("./config/config");

app.listen(config.port, () => {
  console.log("  Task Manager API Server");
  console.log(`Environment: ${config.env}`);
  console.log(`Server running on port ${config.port}`);
  console.log(`Health check: http://localhost:${config.port}/health`);
});
