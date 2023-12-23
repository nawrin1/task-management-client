import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";
import Swal from "sweetalert2";

const AllTask = () => {
  const [toDo, setToDo] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const arr = [ "To-do","Ongoing", "Completed"];

  const { data: task = [], isPending: loading, isFetched,refetch } = useQuery({
    queryKey: ['everytasks'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/tasks`);
      console.log(res.data, "ki");
      return res.data;
    }
  });


  useEffect(() => {
    const todo = task?.filter((tasks) => tasks.status === "To-do");
    const ongoing = task?.filter((tasks) => tasks.status === "Ongoing");
    const completed = task?.filter((tasks) => tasks.status === "Completed");
    setToDo(todo);
    setCompleted(completed);
    setOngoing(ongoing);
  }, [task]);
  if (!isFetched){
    return <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center '><Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>

  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-slate-600">Task list</h2>
      <div className="flex flex-col lg:flex-row gap-4 justify-around mx-auto">
        {arr.map((i) => (
          <TaskCard key={i} status={i} toDo={toDo} ongoing={ongoing} completed={completed} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

const TaskCard = ({ status, toDo, ongoing, completed,refetch }) => {
  let heading = "To-Do";
  let color = "bg-blue-300";
  let taskMap = toDo;

  if (status === "Ongoing") {
    heading = "Ongoing";
    color = "bg-red-300";
    taskMap = ongoing;
  }
  if (status === "Completed") {
    heading = "Completed";
    color = "bg-green-300";
    taskMap = completed;
  }

  return (
    <div className="flex flex-col items-center">
      <Header color={color} heading={heading} />
      {taskMap.length > 0 && taskMap.map((tas) => <List key={tas.id} tas={tas} refetch={refetch} />)}
    </div>
  );
};

const Header = ({ color, heading }) => {
  return (
    <div className={`${color} w-[300px] p-4 rounded-md text-white font-bold text-center`}>
      {heading}
    </div>
  );
};
const handleDel=(id,refetch)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {

            const res= await axios.delete(`http://localhost:5000/tasks/${id}`)
           
                    if (res.data.deletedCount > 0) {
                        console.log('before refetch1')
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Deleted successfully',
                            showConfirmButton: false,
                            timer: 1500
                            
                        })
                        console.log('before refetch')
                        refetch()
                        console.log('after refetch')

                     
                    }
             
        }})
     
}

const List = ({ tas ,refetch}) => {
  return (
    <div className="flex justify-between bg-slate-500 w-[300px]  p-4 my-2 rounded-md text-white">
    <div className="">
      {tas.title}
    </div>
    <div>
        <button className="btn btn-circle btn-sm btn-outline" onClick={()=>handleDel(tas._id,refetch)}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
    </div>
    </div>
  );
};

export default AllTask;
