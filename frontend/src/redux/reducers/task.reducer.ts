import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskType = {
    _id: string;
    title: string;
    description: string;
    priority: 'high' | 'low';
    status: string;
    dueDate: Date;
};

// Define the type for the slice's state
type StateType = {
  todo: TaskType[];
  onprogress: TaskType[];
  done: TaskType[];
};

// Define the initial state with the type
const initialState: StateType = {
  todo: [],
  onprogress: [],
  done: [],
};

// Create the slice with strongly typed reducers
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    assignTodo: (state, action: PayloadAction<TaskType[]>) => {
      state.todo = action.payload;
    },
    assignOnProgress: (state, action: PayloadAction<TaskType[]>) => {
      state.onprogress = action.payload;
    },
    assignDone: (state, action: PayloadAction<TaskType[]>) => {
      state.done = action.payload;
    },
    pushInTodo: (state, action: PayloadAction<TaskType>) => {
        state.todo.push(action.payload);
      },
      pushInOnProgress: (state, action: PayloadAction<TaskType>) => {
        state.onprogress.push(action.payload);
      },
      pushInDone: (state, action: PayloadAction<TaskType>) => {
        state.done.push(action.payload);
      },
  },
});

export default taskSlice;
export const { assignTodo ,assignOnProgress ,assignDone ,pushInTodo, pushInOnProgress, pushInDone } = taskSlice.actions;
