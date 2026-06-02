# Personal Task Manager - Project Architecture

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Storage**: JSON file storage

## Project Structure

```
task-manager/
│
├── client/                          # Frontend (React + Vite)
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── assets/                  # Images, icons, etc.
│   │   │
│   │   ├── components/              # Reusable UI components
│   │   │   ├── TaskItem.jsx         # Individual task component
│   │   │   ├── TaskList.jsx         # List of tasks
│   │   │   ├── TaskForm.jsx         # Create/edit task form
│   │   │   ├── FilterButtons.jsx    # All/Active/Completed filters
│   │   │   ├── SearchBar.jsx        # Search functionality
│   │   │   └── TaskStats.jsx        # Active/completed counts
│   │   │
│   │   ├── services/                # API calls to backend
│   │   │   └── taskService.js       # All task-related API calls
│   │   │
│   │   ├── utils/                   # Helper functions
│   │   │   └── dateUtils.js         # Date formatting, overdue check
│   │   │
│   │   ├── App.jsx                  # Main app component
│   │   ├── App.css                  # Global styles
│   │   ├── index.css                # Tailwind directives
│   │   └── main.jsx                 # Entry point
│   │
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── server/                          # Backend (Node.js + Express)
│   ├── config/                      # Configuration files
│   │   └── config.js                # App configuration (port, file paths)
│   │
│   ├── controllers/                 # Request handlers
│   │   └── taskController.js        # Task CRUD operations
│   │
│   ├── services/                    # Business logic
│   │   └── taskService.js           # Task operations & validation
│   │
│   ├── utils/                       # Helper functions
│   │   └── fileHandler.js           # Read/write JSON file operations
│   │
│   ├── routes/                      # API routes
│   │   └── taskRoutes.js            # Task endpoints
│   │
│   ├── middleware/                  # Express middleware
│   │   └── errorHandler.js          # Centralized error handling
│   │
│   ├── data/                        # JSON storage
│   │   └── tasks.json               # Task data store
│   │
│   ├── server.js                    # Entry point
│   ├── .gitignore
│   └── package.json
│
├── .gitignore                       # Root gitignore
└── README.md                        # Project documentation
```

## API Endpoints

### Tasks

- `GET    /api/tasks` - Get all tasks
- `GET    /api/tasks/:id` - Get task by ID
- `POST   /api/tasks` - Create new task
- `PUT    /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH  /api/tasks/:id/toggle` - Toggle task completion

## Data Model

### Task Object

```json
{
  "id": "string (UUID)",
  "title": "string",
  "description": "string (optional)",
  "dueDate": "string (ISO date)",
  "completed": "boolean",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

## Frontend Architecture

### Component Hierarchy

```
App
├── SearchBar
├── FilterButtons
├── TaskStats
├── TaskForm
└── TaskList
    └── TaskItem (multiple)
```

### State Management

- Use React's `useState` and `useEffect` hooks
- Main state stored in `App.jsx`
- Props passed down to child components

### Client-side Features

- Filter tasks by status (All/Active/Completed)
- Search tasks by title
- Highlight overdue tasks (compare due date with current date)
- Display active/completed counts
- Real-time UI updates

## Backend Architecture

### Flow: Request → Route → Controller → Service → File Handler

1. **Routes** (`routes/taskRoutes.js`)
   - Define API endpoints
   - Map endpoints to controller functions

2. **Controllers** (`controllers/taskController.js`)
   - Handle HTTP requests/responses
   - Call service functions
   - Return appropriate status codes

3. **Services** (`services/taskService.js`)
   - Business logic
   - Data validation
   - ID generation
   - Date handling

4. **File Handler** (`utils/fileHandler.js`)
   - Read from JSON file
   - Write to JSON file
   - Handle file system errors

## Development Workflow

1. Start backend server (runs on port 5000)
2. Start frontend dev server (runs on port 5173)
3. Frontend makes API calls to backend
4. Backend reads/writes to `tasks.json`

## Key Design Decisions

- **Simple state management**: No Redux/Context needed for this scope
- **JSON storage**: Simple file-based persistence, easy to inspect
- **Separation of concerns**: Clear boundaries between routes, controllers, services
- **Error handling**: Centralized middleware for consistent error responses
- **Reusable components**: Small, focused components for maintainability
- **Utility functions**: Shared logic (date handling, file operations) extracted
