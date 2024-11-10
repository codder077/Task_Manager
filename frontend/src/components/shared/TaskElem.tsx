import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "../ui/button";
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
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "@/constants/server";
import { fetchAndCategorizeTasks } from "@/lib/utils";
import { useDispatch } from "react-redux";
type PropType = {
  id:string;
  _status:string;
  level: "low" | "high";
  _title: string;
  descrip: string;
  deadline: Date;
};

// Define the class mappings with explicit types
const levelClasses:{low:string;high:string;completed:string;expired:string} = {
  low: "bg-orange-500/20 text-orange-600 hover:bg-orange-500/30",
  high: "bg-red-500/20 text-red-600 hover:bg-red-500/30",
  completed: "bg-green-500/20 text-green-600 hover:bg-green-500/30",
  expired: "bg-red-500/20 text-red-600 hover:bg-red-500/30",
};

const TaskElem: React.FC<PropType> = ({
  id,
  _status,
  level = "low",
  _title,
  descrip,
  deadline,
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [status, setStatus] = useState<string>("todo");
  let temp:"low"|"high"|"completed"|"expired";
  const currentDate = new Date();
  if (new Date(deadline) < currentDate)temp = 'expired';
  else if(_status === 'completed' )temp=_status;
  else temp = level;
  const buttonClasses = levelClasses[temp];
  
  useEffect(()=>{
    setTitle(_title);
    setDesc(descrip);
    setDueDate(new Date(deadline).toISOString().split("T")[0]);
    setPriority(level);
    setStatus(_status)
  },[])

  const handleDeleteTask=()=>{
    axios.delete(`${server}/tasks/${id}` , {withCredentials:true})
    .then(({ data }) => {
      fetchAndCategorizeTasks(dispatch);
      toast.success(data.message);
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message || "Something went wrong ");
    });
  }
  const handleUpdateTask = (e: React.FormEvent) => {
    e.preventDefault();
   
    const toastId = toast.loading("Updating Task...");
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .put(
        `${server}/tasks/${id}`,
        {
          title,
          description: desc,
          priority,
          dueDate,
          status,
        },
        config
      )
      .then(({ data }) => {
        fetchAndCategorizeTasks(dispatch);
        toast.success(data.message, {
          id: toastId,
        });
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Something went wrong ", {
          id: toastId,
        });
      });
  };

  
  return (
    <div className="min-h-[12rem] w-full py-2 flex flex-col rounded-2xl items-start justify-evenly px-4 mb-4 bg-white lower-shadow">
      <div className="flex w-full  justify-between ">
        <Button className={`text-xs py-2 px-2  rounded ${buttonClasses}`}>
          {temp}
        </Button>
        <div className="flex md:gap-[1rem] ">
          {/* Dialog box to update the task  */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-400/30 p-2 text-blue-500 hover:bg-blue-600/30">
                <EditIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Update Task</DialogTitle>
                <DialogDescription>
                  Update a  task here . Click update  when you're done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={(e) => handleUpdateTask(e)}>
                <div className="grid gap-4 py-4">
                  {/* title  */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-left">
                      Title
                    </Label>
                    <Input
                    value={title}
                      onChange={(e) => setTitle(e.target.value)}
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
                    value={desc}
                      required
                      onChange={(e) => setDesc(e.target.value)}
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
                    <Select defaultValue={priority} required onValueChange={(val) => setPriority(val)}>
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
                    value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      required
                      className="col-span-3"
                      type="date"
                      id="dueDate"
                      placeholder="Select a due date"
                    />
                  </div>
                  {/* Task status  */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-left" htmlFor="complete">
                      Status
                    </Label>
                    <Select
                      required
                      onValueChange={(val) => setStatus(val)}
                      defaultValue={status}
                    >
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
                  <Button typeof="submit" className="w-full" type="submit">
                    Update
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Button onClick={()=>handleDeleteTask()} className="bg-red-400/30 p-2 text-red-500 hover:bg-red-600/30">
            <DeleteIcon />
          </Button>
        </div>
      </div>

      <h2 className="text-lg font-semibold">{_title}</h2>
      <p  style={{ whiteSpace: "pre-wrap" }} className="text-gray-600 text-sm">{descrip}</p>
      <p className="text-gray-500 text-sm ">
        <span className="text-gray-700 font-semibold ">Deadline:</span>{" "}
        {new Date(deadline).toLocaleDateString()}
      </p>
    </div>
  );
};

export default TaskElem;
