import Header from "./components/layout/Header";
import "./App.css";
import TaskCards from "./components/layout/TaskCards";
import Todo from "./components/specific/Todo";
import OnProgress from "./components/specific/OnProgress";
import Done from "./components/specific/Done";
import Slider from "./components/layout/Slider";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { fetchAndCategorizeTasks } from "./lib/utils";
import { useDispatch } from "react-redux";

const App = () => {
  const [activeSection, setActiveSection] = useState<'todo' | 'onprogress' | 'done'>('todo');
const dispatch = useDispatch();
  useEffect(() => {
    fetchAndCategorizeTasks(dispatch);
  }, []);

  return (
    <div>
      <Header />
      <div className="flex w-[100vw] px-5 md:px-10 gap-[1.5rem] md:gap-[2rem]">
        <div className="hidden xl:flex gap-[1rem] w-[80%]">
          <Todo />
          <OnProgress />
          <Done />
        </div>
        <Slider setActiveSection={setActiveSection} />
        <div className="xl:hidden w-[50%] md:w-[80%]">
          {activeSection === 'todo' && <Todo />}
          {activeSection === 'onprogress' && <OnProgress />}
          {activeSection === 'done' && <Done />}
        </div>
        <div className="w-[20%]">
          <TaskCards />
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default App;
