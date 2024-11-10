
# Task Mangement app (Mern Stack)

Built with the reactJs and typscript .
## Live Demo
- Link to the video of full demonstration:https://www.loom.com/share/467bc40842d94638a21ab678f28ed11e
**Deployed Links**
- frontend :  https://task-management-frontend-gules-five.vercel.app/
- backend : https://task-management-backend-q9ie.onrender.com
**Github links**
- frontend : https://github.com/AnujDeshwal/Task_Management_Frontend
- backend : https://github.com/AnujDeshwal/Task_Management_Backend
## (FRONTEND) Tech Stack

- ReactJS
- TypeScript
- Shadcn
- Tailwind CSS



## Features

- Fully stylish task list wih complete responsiveness

- Category Slider (for mobile and tab devices), which switch between various catogories.
- All CRUD operations can be performed with the tasks . 

## Server Variable 
Make sure to change the server variable to your server url, so that all the api's call will be forwarded to that server url only .Server variable resides here -> 
 ```
 - __constants__
       - [server.ts](src/constants/server.ts)


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
git clone https://github.com/AnujDeshwal/Task_Management_Frontend.git
cd Task_Management_Frontend
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


   - [index.html](index.html)
   - __src__
     - [App.css]
     - [App.tsx]
     - __components__
       - __layout__
         - [Header.tsx](src/components/layout/Header.tsx)
         - [Slider.tsx](src/components/layout/Slider.tsx)
         - [TaskCards.tsx](src/components/layout/TaskCards.tsx)
       - __shared__
         - [CardElem.tsx](src/components/shared/CardElem.tsx)
         - [ListLayout.tsx](src/components/shared/ListLayout.tsx)
         - [SearchBox.tsx](src/components/shared/SearchBox.tsx)
         - [TaskElem.tsx](src/components/shared/TaskElem.tsx)
         - [filter\-button\-dropdown.tsx](src/components/shared/filter-button-dropdown.tsx)
       - __specific__
         - [Done.tsx](src/components/specific/Done.tsx)
         - [OnProgress.tsx](src/components/specific/OnProgress.tsx)
         - [Todo.tsx](src/components/specific/Todo.tsx)
       - __ui__
         - [button.tsx](src/components/ui/button.tsx)
         - [dialog.tsx](src/components/ui/dialog.tsx)
         - [dropdown\-menu.tsx](src/components/ui/dropdown-menu.tsx)
         - [input.tsx](src/components/ui/input.tsx)
         - [label.tsx](src/components/ui/label.tsx)
         - [select.tsx](src/components/ui/select.tsx)
         - [textarea.tsx](src/components/ui/textarea.tsx)
     - __constants__
       - [server.ts](src/constants/server.ts)
     - [index.css](src/index.css)
     - __lib__
       - [utils.ts](src/lib/utils.ts)
     - [main.tsx](src/main.tsx)
     - __redux__
       - __reducers__
         - [card.reducer.ts](src/redux/reducers/card.reducer.ts)
         - [task.reducer.ts](src/redux/reducers/task.reducer.ts)
       - [store.ts](src/redux/store.ts)

   ```