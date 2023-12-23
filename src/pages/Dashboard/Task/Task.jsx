import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";


const Task = () => {
    const [toDo,setToDo]=useState([])
    const [ongoing,setOngoing]=useState([])
    const [completed,setCompleted]=useState([])
    const arr=["To-do","Ongoing","Completed"]
    const {data: task = [], isPending: loadings,isFetched } = useQuery({
        queryKey: ['alltask'], 
        queryFn: async() =>{
            const res = await axios.get(`http://localhost:5000/tasks`);
            console.log(res.data,"ki")
            return res.data;
        }
    })
    // console.log(task,"whaaaaaaaaaa")
    
    useEffect(()=>{
        const todo= task.filter(tasks=>tasks.status="To-do")
        const ongoing= task.filter(tasks=>tasks.status="Ongoing")
        const completed= task.filter(tasks=>tasks.status="Completed")
        setToDo(todo)
        setCompleted(completed)
        setOngoing(ongoing)

    },[task])
    // console.log(toDo,ongoing,completed,"????????")
    return (
        <div>
            <h2>Task</h2>
            <div className="flex gap-16 justify-around mx-auto items-center">
            {
                arr.map(i=><TaskCard key={i} status={i} task={task} toDo={toDo} ongoing={ongoing} completed={completed} ></TaskCard>)
            }
            </div>
            
        </div>
    );
};

export default Task;

const TaskCard=({status,completed,toDo, ongoing})=>{
    let heading="To-Do"
    let color="bg-green-200"
    let taskMap=toDo
    console.log(taskMap,"what")
    if(status=="To-Do"){
       heading="To-Do"
        color="bg-green-200",
        taskMap=toDo
    }
    if(status=="Ongoing"){
        heading="Ongoing"
      color="bg-red-200",
        taskMap=ongoing
    }
    if(status=="Completed"){
        heading="Completed"
        color="bg-blue-200",
        taskMap=completed
    }
    return(
        <div>
        <Header color={color} heading={heading} ></Header>
        {
            taskMap.length>0 && taskMap.map(tas=><List tas={tas}></List>)
        }
        </div>
        


    )

}
const Header = ({ color, heading }) => {
    return (
      <div className={`${color} w-[300px]`}>
        {heading}

        
      </div>
    );
  };
const List= ({ tas}) => {
    
    return (
      <div className="w-[100px]">
        {tas.title}

        
      </div>
    );
  };
