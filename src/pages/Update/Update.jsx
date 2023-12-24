import { useLoaderData } from "react-router-dom";


import { MenuItem, Select, TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";


import axios from "axios";
import Swal from "sweetalert2";
import img1 from '../../assets/update2.png'
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";


const Update= () => {
    const {user}=useContext(AuthContext)
    const datas=useLoaderData()
    console.log(datas,"from update")
    const { register, handleSubmit, reset, formState: { errors },setError,control } = useForm();
    const onSubmit=async (data)=>{
        console.log(data)
        const task={title:data.title, description:data.description,deadline:data.deadline,email:user.email,priority:data.priority,status:"To-do"}
        console.log(task,"from update")
        const taskData = await axios.patch(`http://localhost:5000/tasks/${datas._id}`, task)
            console.log(taskData.data)
            if(taskData.data.modifiedCount>0){
                toast.success("Task is Updated")
                
                // reset();

            }


    }
    return (


<div className="">
        <div className="min-h-screen max-w-3xl mx-auto pt-2 ">
           <div className="">
           <h2 className="font-sans font-semibold text-3xl text-center ">Update Task</h2>
              
                   
               <div className=" shadow-2xl flex">
                <div className="w-[40%] bg-slate-500 hidden lg:block md:block">
                    <img src={img1} alt="" />

                </div>
                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                       <div className="form-control  ">
                        <div>
                        
                    <TextField
                fullWidth
                id="outlined-search1"
                label="Title"
                type="text"
                {...register("title", { required: true })}
                name="title"
                placeholder="Title.."
                InputProps={{
                    style: {
                    color: 'black',
                    borderBottom: "1px solid black",
                    },
                    
                }}
                style={{ fontFamily: 'sans' }}
                defaultValue={datas.title}
                variant="standard"  
                />

                        </div>
   
                       </div>
                       <div className="form-control">
                          
                           <TextField  InputProps={{
        
        style: { color: 'black',borderBottom: "1px solid black" }, 
      }} style={{fontFamily:'sans'}} defaultValue={datas.description} id="outlined-search2" label="Description" type="text"  {...register("description", { required: true })} variant="standard"  placeholder="Description.." />
                           
                       
                           
                       </div>
                  
                       <div className="form-control">
                          
                  

                           <label className="label ">
                               <span className="label-text mt-2 font-sans text-slate-600 text-[18px]">Deadline:</span>
                           </label>
                           <TextField  InputProps={{
       
        style: { color: 'black',borderBottom: "1px solid black" }, 
      }}style={{fontFamily:'sans'}} id="outlined-search8" defaultValue={datas.deadline} variant="standard"  type="date"  {...register("deadline", {
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
                               <span className="label-text mt-2 font-sans text-slate-600 text-[18px]">Priority:</span>
                           </label>
                           <Controller
                    name="priority"
                    control={control}
                    defaultValue={datas.priority}
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
                                <input className="btn  bg-[#4a9bb4] font-Sora font-semibold" type="submit" value="Update Task" />
                            </div>
                          
                       
                   </form>
                  
                   
               </div>

           </div>
       </div>
       
   </div>

    );
};

export default Update;