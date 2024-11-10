import ListLayout from '../shared/ListLayout'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Done = () => {
  const done = useSelector((state: RootState) => state.task.done );
  const state = useSelector((state: RootState) => state.card);
  return (
    <ListLayout count={state.Completed} arr={done} color={'green'} title='Done'/>
  )
}

export default Done