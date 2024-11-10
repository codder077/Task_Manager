import React, { ReactNode } from "react";

type CardElemProps = {
  icon: ReactNode;
  title: string;
  count: number;
};
const CardElem: React.FC<CardElemProps> = ({ icon, title, count }) => {
    let color ;
      if(title === "Active Tasks")color = 'bg-[#e89271]';
    else if(title === "Expired Tasks")color = 'bg-red-500/50';
    else  if(title === "Done")color = 'bg-green-500/50';
  return (
    <div className="h-[9rem] flex flex-col justify-evenly px-2 md:px-4 py-3 w-full my-[1rem] bg-[#ecedee] lower-shadow">
      <div className={`w-[1.7rem] md:w-[2rem] ${color} h-[1.7rem] md:h-[2rem] rounded-full  flex justify-center items-center`}>{icon}</div>
      <h2 className="md:text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-extrabold">{count}</p>   
    </div>
  );
};

export default CardElem;
