import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { server } from "../constants/server";
import axios from "axios";
import { assignDone, assignOnProgress, assignTodo, TaskType } from "../redux/reducers/task.reducer";
import { incAct, incComp, incExp, incProg, incTodo } from "../redux/reducers/card.reducer";
import { AppDispatch } from "@/redux/store";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export  const fetchAndCategorizeTasks = async (dispatch:AppDispatch) => {
  try {
    const {data} = await axios.get(`${server}/tasks/`, { withCredentials: true });
    // console.log("thisisdata",data)
    let todo: TaskType[] = [];
    let onprogress: TaskType[] = [];
    let done: TaskType[] = [];
    let expired = 0;
    const currentDate = new Date();

    data.tasks.forEach((task: TaskType) => {
      if (new Date(task.dueDate) < currentDate) {
        expired += 1;
      }
      switch (task.status) {
        case 'todo':
          todo.push(task);
          break;
        case 'onprogress':
          onprogress.push(task);
          break;
        case 'completed':
          done.push(task);
          break;
      }
    });

    dispatch(assignTodo(todo));
    dispatch(assignOnProgress(onprogress));
    dispatch(assignDone(done));
    dispatch(incAct(onprogress.length + todo.length));
    dispatch(incComp(done.length));
    dispatch(incExp(expired));
    dispatch(incProg(onprogress.length));
    dispatch(incTodo(todo.length));
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
  }
};
