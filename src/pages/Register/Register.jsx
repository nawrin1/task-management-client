import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import './Register.css'
import Swal from 'sweetalert2'

import img1 from '../../assets/profile.png'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Register = () => {
    // const {createUser,updateProfile,logout}=useContext(AuthContext)
    
    const navigate=useNavigate()
    const { createUser, updateProfileUser,logout } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit=data=>{
        console.log(data.email, data.password,data.photoURL,data.name)
        createUser(data.email,data.password)
            .then(result=>{
                console.log(result.user,"user console")
                
                
                  updateProfileUser(data.name,data.photoURL)
                  .then(() => {
                       
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        photo:data.photoURL
                      
                    }
                    
                    axios.post('http://localhost:5000/users', userInfo)
                        .then(res => {
                            console.log(res,"after post from register")
                            if (res.data.insertedId) {
                                console.log('user added')
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Account Created successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                logout()
                                .then(res=>navigate('/login'))


                               
                            }
                        })


                })
                .catch(error => {
                    console.log(error)
                    
                })
   
            })
            .catch(error=>{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Registration failed",
                    
                  });
                console.log(error)
            })

    }

    return (

    <div className="reg flex items-center justify-center bg-slate-500 ">
        <div className="bg-white p-4 rounded shadow-md  mb-[40px] relative mt-[130px] md:mt-[150px] lg:my-[74px] ">
        <div className="avatar absolute -top-[45px] left-[40%]">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
    <img src={img1} />
  </div>
</div>
            <div>
           <h2 className="text-2xl font-bold mb-3 mt-4 text-center">Register Now</h2>

           <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search1" label="Your Name" type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name.."/>
       
                             
                                {errors.name && <span className="text-red-600">Name is required</span>}
                               
                            </div>
                            <div className="form-control">
                               
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search2" label="Your Photo URL" type="text"  {...register("photoURL", { required: true })} placeholder="Your Photo URL.." />
                                
                                {errors.photoURL && <span className="text-red-600">PhotoURL is required</span>}
                                
                            </div>
                            <div className="form-control">
                              
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search3" label="Your email" type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email.."  />
                               
                                {errors.email && <span className="text-red-600">Email is required</span>}
                                
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                 <TextField style={{fontFamily:'Sora'}} id="outlined-search4" label="Your Password" type="password"  {...register("password", {
                                    required: true,
                                   
                                    
                                })} placeholder="Set your password..."  />
                               
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                
                               
                              
                                
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary font-Sora font-semibold" type="submit" value="Register Now" />
                            </div>
                        </form>
                        </div>
                        <p className='px-6 mb-9 font-Sora font-semibold text-center'><small>Already have an account? <Link to="/login">Login Now!</Link> </small></p>


</div>
    </div>
    );
};

export default Register;