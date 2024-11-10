import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./reducers/card.reducer.js";
import taskSlice from "./reducers/task.reducer.js";


const store = configureStore({
   reducer:{
    [cardSlice.name]:cardSlice.reducer,
    [taskSlice.name]:taskSlice.reducer,
   }
})
export default store ;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;