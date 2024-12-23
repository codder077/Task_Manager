
# Task Mangement app (Backend)

Built with the typescript , nodeJS ,mongodb and express .
## Live Demo
- Link to the video of full demonstration:https://www.loom.com/share/467bc40842d94638a21ab678f28ed11e
**Deployed Links**
- frontend :  https://task-management-frontend-gules-five.vercel.app/
- backend : https://task-management-backend-q9ie.onrender.com
**Github links**
- frontend : https://github.com/AnujDeshwal/Task_Management_Frontend
- backend : https://github.com/AnujDeshwal/Task_Management_Backend
## (Bakend) Tech Stack

- TypeScript
- NodeJS
- MongoDB
- Express



## Features

- Have used TypeScript which makes your code a tension free code , because it keeps the track of the very little thing and gives warning and error at every stage of our coding .  
- Have utilized a wordlwide used database -> MongDB
- Have utilized the error handling at every stage of different api's to get the idea of workflow.
- Have used async / await to carefully manage the api's.



## .env
Make sure you have your mongod db connection string in order to connect the backend with the mongodb
Example MONGO_URL = ..................
## CORS thing
Make sure to add the origin or url of the frontend in the config.ts file located here :  
```
     - __utils__
       - [config.js](utils/config.js)
```
## Quick Start
Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)
**Cloning the Repository**

```
git clone https://github.com/AnujDeshwal/Task_Management_Backend
cd Task_Management_Backend
```
**Installation of project dependencies**

```
npm install
```
**Running the project**

```
npm run dev
```

## Files Structure
```


  - [README.md](README.md)
   - __controllers__
     - [task.controller.js](controllers/task.controller.js)
     - [task.controller.ts](controllers/task.controller.ts)
   - [index.js](index.js)
   - [index.ts](index.ts)
   - __middleware__
     - [error.middleware.js](middleware/error.middleware.js)
     - [error.middleware.ts](middleware/error.middleware.ts)
   - __models__
     - [task.model.js](models/task.model.js)
     - [task.model.ts](models/task.model.ts)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - __routes__
     - [task.route.js](routes/task.route.js)
     - [task.route.ts](routes/task.route.ts)
   - [tsconfig.json](tsconfig.json)
   - __utils__
     - [config.js](utils/config.js)
     - [config.ts](utils/config.ts)
     - [features.js](utils/features.js)
     - [features.ts](utils/features.ts)
   - [vercel.json](vercel.json)

   ```