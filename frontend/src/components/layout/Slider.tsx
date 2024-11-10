import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "../ui/button";
import React from "react";
type PropType = {
  setActiveSection: React.Dispatch<React.SetStateAction<'todo' | 'onprogress' | 'done'>>;
  
};
const Slider: React.FC<PropType> = ({
  setActiveSection
}) => {
  return (
    <div className="xl:hidden lower-shadow h-[calc(100vh-10rem)] flex flex-col justify-start gap-[4rem] my-[1rem] bg-[#ecedee] p-2 md:p-4 rounded-xl">
      {/* Hourglass Button with Tooltip */}
      <div className="relative group flex justify-center items-center">
        <Button
          onClick={() => {
            setActiveSection("todo");
          }}
          className="className={` bg-red-600/30 hover:bg-red-800/60 h-[2rem] rounded-full  flex justify-center items-center`}"
        >
          <HourglassEmptyIcon className="text-white" />
        </Button>
        <span className="absolute bottom-full mb-2 p-2 w-[7rem]  text-center text-sm text-white bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          To Do
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-[-0.1rem] w-4 h-4 bg-gray-800 rotate-45"></div>
        </span>
      </div>

      {/* Play Button with Tooltip */}
      <div className="relative group flex justify-center items-center">
        <Button
          onClick={() => {
            setActiveSection("onprogress");
          }}
          className="className={` hover:bg-orange-600/80 bg-orange-600/50 h-[2rem] rounded-full  flex justify-center items-center`}"
        >
          <PlayArrowIcon className="text-white" />
        </Button>
        <span className="absolute bottom-full mb-2 p-2 w-[7rem] text-center text-sm text-white bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          In Progress
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-[-0.1rem] w-4 h-4 bg-gray-800 rotate-45"></div>
        </span>
      </div>

      {/* Check Circle Button with Tooltip */}
      <div className="relative group flex justify-center items-center">
        <Button
          onClick={() => {
            setActiveSection("done");
          }}
          className=" hover:bg-green-800/70  bg-green-600/50 h-[2rem] rounded-full  flex justify-center items-center"
        >
          <CheckCircleIcon className="text-white" />
        </Button>
        <span className="absolute bottom-full mb-2 p-2 w-[8rem] text-center text-sm text-white bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Completed Tasks
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-[-0.1rem] w-4 h-4 bg-gray-800 rotate-45"></div>
        </span>
      </div>
    </div>
  );
};

export default Slider;
