import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import type { RootState } from "../../redux/store";
import toast from "react-hot-toast";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardElem from "../shared/CardElem";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { server } from "@/constants/server";
import { fetchAndCategorizeTasks } from "@/lib/utils";
const TaskCards = () => {
  const dispatch = useDispatch();
  const { Expired, Active, Completed } = useSelector(
    (state: RootState) => state.card
  );
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [status, setStatus] = useState<string>("todo");
  const [Exp, setExp] = useState<number>(0);
  const [Act, setAct] = useState<number>(0);
  const [Comp, setComp] = useState<number>(0);
  useEffect(() => {
    setExp(Expired);
    setAct(Active);
    setComp(Completed);
  }, [Expired, Active, Completed]);

  const handleCreateTask = (e:React.FormEvent) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
    setPriority("");
    setDueDate("");
    setStatus("todo");
    const toastId = toast.loading("Creating Task...");
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post(
      `${server}/tasks/createTask`,
      {
        title,
        description: desc,
        priority,
        dueDate,
        status,
      },
      config
    ).then(({data})=>{
      fetchAndCategorizeTasks(dispatch);
      toast.success(data.message, {
        id: toastId,
      });
    })
    .catch((err) =>
      {
        toast.error(err?.response?.data?.message || "Something went wrong ", {
        id: toastId,
      })}
    )
  };

  return (
    <>
    {Exp===0 && Comp == 0 && Act == 0}
      <CardElem
        icon={<HourglassEmptyIcon className="text-white " />}
        title={"Expired Tasks"}
        count={Expired}
      />
      <CardElem
        icon={<PlayArrowIcon className="text-white" />}
        title={"Active Tasks"}
        count={Active}
      />
      <CardElem
        icon={<CheckCircleIcon className="text-white" />}
        title={"Done"}
        count={Completed}
      />

      {/* Dialog of Create a new task started  */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="my-[1rem] w-full h-[4rem] flex flex-col md:flex ">
            <h1>+</h1>Add Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Task</DialogTitle>
            <DialogDescription>
              Create a new task here . Click create  when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => handleCreateTask(e)}>
            <div className="grid gap-4 py-4">
              {/* title  */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-left">
                  Title
                </Label>
                <Input
                onChange={e=>setTitle(e.target.value)}
                value={title}
                  required
                  id="title"
                  placeholder="Your title"
                  className="col-span-3"
                />
              </div>
              {/* Description  */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-left" htmlFor="description">
                  Description
                </Label>
                <Textarea
                wrap="hard"
                  required
                  value={desc}
                  onChange={e=>setDesc(e.target.value)}
                  id="description"
                  placeholder="Type your description here."
                  className="col-span-3"
                />
              </div>
              {/* Select priority  */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-left" htmlFor="priority">
                  Select Priority
                </Label>
                <Select defaultValue={priority} required onValueChange={val=>setPriority(val)} >
                  <SelectTrigger className="col-span-3" id="priority">
                    <SelectValue placeholder="Select a priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Due Date  */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-left" htmlFor="dueDate">
                  Due Date
                </Label>
                <Input
                onChange={e=>setDueDate(e.target.value)}
                  required
                  value={dueDate}
                  className="col-span-3"
                  type="date"
                  id="dueDate"
                  placeholder="Select a due date"
                />
              </div>
              {/* Task completed  */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-left" htmlFor="complete">
                  Status
                </Label>
                <Select required onValueChange={val => setStatus(val)} defaultValue={status}>
                  <SelectTrigger className="col-span-3" id="complete">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onprogress">On Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="todo">To Do </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                typeof="submit"
                className="w-full"
                type="submit"
              >
                Create
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskCards;
