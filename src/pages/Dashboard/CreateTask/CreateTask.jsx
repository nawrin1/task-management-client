import { MenuItem, Select, TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import './CreateTask.css'
import axios from "axios";
import Swal from "sweetalert2";


const CreateTask = () => {
    const {user}=useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors },setError,control } = useForm();
    const onSubmit=async (data)=>{
        console.log(data)
        const task={title:data.title, description:data.description,deadline:data.deadline,email:user.email,priority:data.priority}
        console.log(task,"from create")
        const taskData = await axios.post('http://localhost:5000/tasks', task)
            console.log(taskData.data)
            if(taskData.data.insertedId){
                
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Task is created`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }


    }
    return (
//         <div>
            
//                       <div className="bg-gray-100 min-h-screen flex flex-col justify-center mx-auto px-10  ">
      
//         <h2 className="text-2xl font-bold mb-6 text-center">Create a New Task</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
//                             <div className="form-control ">
                                
//                                 <TextField style={{fontFamily:'sans'}}  id="outlined-search1" label="Task Title" type="text"  {...register("title", { required: true })} name="title" placeholder="Task Title.."/>
       
                             
//                                 {errors.title && <span className="text-red-600">Title is required</span>}
                               
//                             </div>
//                             <div className="form-control ">
                               
//                                 <TextField style={{fontFamily:'sans'}} id="outlined-search2" label="Task Description" type="text"  {...register("description", { required: true })} placeholder="Task description.." />
                                
//                                 {errors.description && <span className="text-red-600">Task description is required</span>}
                                
//                             </div>
//                             <div className="form-control flex bg-slate-500">
                            
//                                 <div className="">
//                                 <TextField style={{fontFamily:'sans'}} id="outlined-search7" label="" type="date"  {...register("deadline", {
//                                     required: true,
                                   
                                    
//                                 })} placeholder="Deadline of task..."  />
//                                 {errors.deadline && <p className="text-red-600">Deadline is required</p>}
//                                 </div>
//                                 <div className="">
                           
// {/* 
//                                     <select className="w-[100%]">
//                                         <option value="yes">low</option>
//                                         <option value="yes">Moderate</option>
//                                         <option value="yes">low</option>
//                                     </select> */}
//                                     <Controller
//                                     name="important"
//                                     control={control}
//                                     render={({ field }) => (
//                                     <Select
//                                         {...field}
//                                         options={[
//                                         { value: "low", label: "low" },
//                                         { value: "moderate", label: "moderate" },
//                                         { value: "high", label: "high" },
//                                         ]}
//                                     />
//                                     )}
//                                 />
//                                 </div>
//                             </div>

                        
//                             <div className="form-control mt-2">
//                                 <input className="btn btn-primary font-Sora font-semibold " type="submit" value="Create task" />
//                             </div>
//                         </form>
//                         </div>

        
    
   
            
//         </div>

<div className="">
        <div className="min-h-screen max-w-3xl mx-auto pt-2 ">
           <div className="">
           <h2 className="font-sans font-semibold text-3xl text-center ">Create a Task</h2>
              
                   
               <div className=" shadow-2xl">
                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                       <div className="form-control  ">
                        <div>
                        <TextField  InputProps={{
       
        style: { color: 'black' }, // Adjust the color to make it more visible
      }}style={{fontFamily:'sans'}} fullWidth id="outlined-search1" label="Title" type="text"  {...register("title", { required: true })} name="title" placeholder="Title.."/>
                        </div>
   
                       </div>
                       <div className="form-control">
                          
                           <TextField  InputProps={{
        
        style: { color: 'black' }, // Adjust the color to make it more visible
      }}style={{fontFamily:'sans'}}  id="outlined-search2" label="Description" type="text"  {...register("description", { required: true })} placeholder="Description.." />
                           
                       
                           
                       </div>
                  
                       <div className="form-control">
                          
                  

                           <label className="label ">
                               <span className="label-text mt-2 font-sans font-semibold text-2xl">Deadline:</span>
                           </label>
                           <TextField  InputProps={{
       
        style: { color: 'black' }, 
      }}style={{fontFamily:'sans'}} id="outlined-search8"   type="date"  {...register("deadline", {
                               required: true,
                              
                               
                           })}   />

                           <div>
                            
                          
{/* 
        <select id="selectOption" name="selectOption">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
       
    </select>
         */}
         <label className="label ">
                               <span className="label-text mt-2 font-sans font-semibold text-2xl">Priority:</span>
                           </label>
                           <Controller
                    name="priority"
                    control={control}
                    defaultValue="moderate"
                    render={({ field }) => (
                      <Select {...field} label="Priority">
                        
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="moderate">Moderate</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                      </Select>
                    )}
                  />
                           </div>
                          
    
                       </div>
                       <div className="form-control mt-2">
                                <input className="btn btn-primary font-Sora font-semibold" type="submit" value="Create Task" />
                            </div>
                          
                       
                   </form>
                  
                   
               </div>

           </div>
       </div>
       
   </div>

    );
};

export default CreateTask;