import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the slice's state
type StateType = {
  Expired: number;
  Active: number;
  Completed: number;
  onprogress:number;
  todo:number;
};

// Define the initial state with the type
const initialState: StateType = {
  Expired: 0,
  Active: 0,
  Completed: 0,
  onprogress:0,
  todo:0,
};

// Create the slice with strongly typed reducers
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    incExp: (state: StateType ,action:PayloadAction<number>) => {
      state.Expired = action.payload;
    },
    incAct: (state: StateType  ,action:PayloadAction<number>) => {
      state.Active = action.payload;
    },
    incComp: (state: StateType , action:PayloadAction<number>) => {
      state.Completed = action.payload;
    },
    incProg: (state: StateType , action:PayloadAction<number>) => {
      state.onprogress = action.payload;
    },
    incTodo: (state: StateType , action:PayloadAction<number>) => {
      state.todo = action.payload;
    },
  },
});


export default cardSlice;
export const { incExp, incAct, incComp ,incProg,incTodo } = cardSlice.actions;
