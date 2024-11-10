import React from 'react';
import TaskElem from './TaskElem';
import { TaskType } from '@/redux/reducers/task.reducer';

type PropsType = {count:number ,arr:TaskType[], color: string; title: string };


const ListLayout: React.FC<PropsType> = ({count = 0,arr=[], color = 'bg-purple-700', title = "To Do" }) => {
    let border , bg;
    if(color == 'purple'){
        border ='border-purple-500';
        bg = 'bg-purple-500';
    }
    else if(color == 'orange'){
        border ='border-orange-500';
        bg = 'bg-orange-500';
    }
    else {
        border ='border-green-500';
        bg = 'bg-green-500';
    }
  return (
    <div className=' lower-shadow rounded-lg my-[1rem] h-[calc(100vh-10rem)]  flex flex-col items-center p-3 w-full bg-[#ecedee]'>
      {/* Header */}
      <div className={`flex w-full justify-center items-center md:p-4 gap-[1rem] border-b-2 ${border}`}>
        <div className={`h-[0.5rem] w-[0.5rem] rounded-full ${bg}`}></div>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <div className={`h-[1rem] w-[1rem] rounded-full bg-gray-300 text-[0.8rem] flex justify-center items-center`}>{count}</div>
      </div>
      
      {/* Scrollable Task List */}
      <div className='thin-scrollbar py-3 md:p-3 w-full  overflow-y-auto  '>
        {arr.length===0 ?<p className='text-lg text-gray-600'>No tasks in this cateogory</p> :(arr.map(({ _id ,status, title, description, dueDate,priority  }, ind) => {
          // let date:string = new Date(dueDate).toLocaleDateString();
          return <TaskElem id={_id} _status={status} key={ind} level={priority} _title={title} descrip={description} deadline={dueDate} />
}))}
      </div>
    </div>
  );
}

export default ListLayout;
