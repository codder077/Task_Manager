import React from 'react';
import ListLayout from '../shared/ListLayout';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { TaskType } from '@/redux/reducers/task.reducer';


const Todo: React.FC = () => {
  // Specify the type of `todo` to be `TaskType[]` using `RootState`
  const todo = useSelector((state: RootState) => state.task.todo as TaskType[]);
  const state = useSelector((state: RootState) => state.card);

  return (
    <ListLayout count={state.todo} arr={todo} color="purple" title="To Do" />
  );
};

export default Todo;
