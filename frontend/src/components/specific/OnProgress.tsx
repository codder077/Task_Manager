import ListLayout from '../shared/ListLayout'
import { RootState } from '@/redux/store';
import { TaskType } from '@/redux/reducers/task.reducer';
import { useSelector } from 'react-redux';

const OnProgress = () => {
  const onprogress = useSelector((state: RootState) => state.task.onprogress as TaskType[]);
  const state = useSelector((state: RootState) => state.card);
  return (
    <ListLayout count={state.onprogress} arr={onprogress} color={'orange'} title='On Progress'/>
  )
}

export default OnProgress