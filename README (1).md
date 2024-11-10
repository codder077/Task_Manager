
# Task Management Application

This Task Management Application is a full-stack web app built with React (frontend) and Node.js with Express (backend) using TypeScript. It provides basic CRUD operations for tasks, a category slider to navigate between different task categories, automatic timeout handling for tasks, and an async endpoint for fetching streaming data.

## Features

### Frontend (React with TypeScript)
- **Task List**: Displays all tasks.
- **Task Item**: Shows individual task details.
- **Task Form**: Allows adding and editing tasks with validation.
- **Category Slider**: A UI slider for navigating task categories such as "To Do," "In Progress," "Done," and "Timeout."
- **Timeout Handling**: Automatically moves tasks to the "Timeout" category if their duration exceeds a specified limit.
- **API Integration**: Async/await is used for efficient API handling, with timeout support for API requests.
- **Styling**: Styled with Tailwind CSS, providing a responsive and visually appealing UI.
- **Error Handling**: Proper error and validation messages for a better user experience.

### Backend (Node.js, Express, TypeScript)
- **CRUD Endpoints**:
  - `GET /tasks`: Fetch all tasks.
  - `GET /tasks/:id`: Fetch a single task by ID.
  - `POST /tasks`: Create a new task.
  - `PUT /tasks/:id`: Update a task by ID.
  - `DELETE /tasks/:id`: Delete a task by ID.
- **Timeout Handling**: A field is added to tasks to record duration. If a task exceeds its time limit, it is marked as "Timeout" by the backend.
- **Database**: Uses an in-memory database for simplicity but can be configured to use MongoDB or SQLite.
- **Error Handling**: Comprehensive validation and error handling for all endpoints.


## Getting Started

### Prerequisites
- **Node.js** (v14+)
- **npm** or **yarn**
- **MongoDB** (if not using the in-memory database)

### Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/codder077/Task_Manager.git
   cd Task_Manager
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # or yarn install
   ```

   - **Environment Variables**: Create a `.env` file in the backend folder with:
     ```plaintext
     PORT=8000
     MONGO_URI="your mongo url string"
     ```

   - **Run the Backend Server**
     ```bash
     npm run dev
     ```

   The backend server will run at `http://localhost:8000`.

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   # or yarn install
   ```

   - **Run the Frontend**
     ```bash
     npm run dev
     ```

   The frontend will run at `http://localhost:5173`.

### Usage

1. Access the frontend in your browser at `http://localhost:5173`.
2. Navigate tasks using the Category Slider, add or edit tasks via the Task Form, and check "Timeout" tasks.

## Project Structure

```plaintext
task-manager/

## Backend
- **controllers**
  - [task.controller.js](controllers/task.controller.js)
  - [task.controller.ts](controllers/task.controller.ts)
- [index.js](index.js)
- [index.ts](index.ts)
- **middleware**
  - [error.middleware.js](middleware/error.middleware.js)
  - [error.middleware.ts](middleware/error.middleware.ts)
- **models**
  - [task.model.js](models/task.model.js)
  - [task.model.ts](models/task.model.ts)
- **node_modules**
- [package-lock.json](package-lock.json)
- [package.json](package.json)
- **routes**
  - [task.route.js](routes/task.route.js)
  - [task.route.ts](routes/task.route.ts)
- [tsconfig.json](tsconfig.json)
- **utils**
  - [config.js](utils/config.js)
  - [config.ts](utils/config.ts)
  - [features.js](utils/features.js)
  - [features.ts](utils/features.ts)
- [vercel.json](vercel.json)

---

## Frontend
- [index.html](index.html)
- **src**
  - [App.css](src/App.css)
  - [App.tsx](src/App.tsx)
  - **components**
    - **layout**
      - [Header.tsx](src/components/layout/Header.tsx)
      - [Slider.tsx](src/components/layout/Slider.tsx)
      - [TaskCards.tsx](src/components/layout/TaskCards.tsx)
    - **shared**
      - [CardElem.tsx](src/components/shared/CardElem.tsx)
      - [ListLayout.tsx](src/components/shared/ListLayout.tsx)
      - [SearchBox.tsx](src/components/shared/SearchBox.tsx)
      - [TaskElem.tsx](src/components/shared/TaskElem.tsx)
      - [filter-button-dropdown.tsx](src/components/shared/filter-button-dropdown.tsx)
    - **specific**
      - [Done.tsx](src/components/specific/Done.tsx)
      - [OnProgress.tsx](src/components/specific/OnProgress.tsx)
      - [Todo.tsx](src/components/specific/Todo.tsx)
    - **ui**
      - [button.tsx](src/components/ui/button.tsx)
      - [dialog.tsx](src/components/ui/dialog.tsx)
      - [dropdown-menu.tsx](src/components/ui/dropdown-menu.tsx)
      - [input.tsx](src/components/ui/input.tsx)
      - [label.tsx](src/components/ui/label.tsx)
      - [select.tsx](src/components/ui/select.tsx)
      - [textarea.tsx](src/components/ui/textarea.tsx)
  - **constants**
    - [server.ts](src/constants/server.ts)
  - [index.css](src/index.css)
  - **lib**
    - [utils.ts](src/lib/utils.ts)
  - [main.tsx](src/main.tsx)
  - **redux**
    - **reducers**
      - [card.reducer.ts](src/redux/reducers/card.reducer.ts)
      - [task.reducer.ts](src/redux/reducers/task.reducer.ts)
    - [store.ts](src/redux/store.ts)

```

## Technical Details

### Task Timeout Handling
- **Backend**: Each task includes a duration field. A scheduled job or conditional check moves tasks to "Timeout" if their duration exceeds a certain limit.
- **Frontend**: Category Slider displays tasks by category. Tasks in "Timeout" are fetched and shown automatically based on the backend response.

### Advanced Async Handling
- **Streaming API**: `GET /streaming` endpoint fetches streaming data using async/await.
- **Error Handling**: Both frontend and backend provide informative error messages for a smooth experience.

## Deployment Notes

- **Environment Variables**: Ensure frontend and backend URLs are configured correctly.
- **Links**: 
  - Frontend: (task-manager-inxw.vercel.app/)
  - Backend: (https://task-manager-rosy-psi.vercel.app)

