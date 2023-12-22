import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import './Login.css'

import img1 from '../../assets/profile.png'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import Social from "../../components/Social/Social";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const onSubmit=data=>{
        console.log(data.email, data.password)
        login(data.email,data.password)
        .then(result=>{
            console.log("logged in")
            let timerInterval;
            Swal.fire({
            title: "Logging in",
            
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
                navigate("/dashboard/profile")
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
            });
            


        })
        .catch(error=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Login failed",
                
              });

        })
    }

    return (
    //     <div className="hero  ">
    //     <div className="hero-content flex-col md:flex-row-reverse">
    //         {/* <div className="text-center md:w-1/2 ">
    //             <img src={img1} alt="" />
                
    //         </div> */}
    //         <div className="card md:w-1/2 max-w-sm bg-red-400 shadow-2xl ">
    //             <form onSubmit={handleSubmit(onSubmit)}className="card-body">
    //             <div className="form-control">
                      
    //                   <TextField style={{fontFamily:'Sora'}}  id="outlined-search1" label="Your email" type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email.."  />
                     
    //                   {errors.email && <span className="text-red-600">Email is required</span>}
                      
    //               </div>
    //               <div className="form-control">
    //                     {/* <label className="label">
    //                         <span className="label-text">Password</span>
    //                     </label> */}
    //                      <TextField style={{fontFamily:'Sora'}} id="outlined-search" label="Your Password" type="password"  {...register("password", {
    //                         required: true,
                           
                            
    //                     })} placeholder="Give your password..."  />
                       
    //                     {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        
                       
                      
                        
    //                 </div>
    //                 <div className="form-control mt-2">
    //                     <input className="btn btn-primary font-Sora font-semibold" type="submit" value="Login Now" />
    //                 </div>
                    
                    
    //             </form>
                
    //         </div>
    //     </div>
    // </div>
    <div className="flex items-center justify-center bg-slate-500 backimage ">
        <div className="bg-white p-4 rounded shadow-md  mb-[40px] relative mt-[130px] md:mt-[150px] lg:my-[74px] ">
        <div className="avatar absolute -top-[60px] left-[38%]">
  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
    <img src={img1} />
  </div>
</div>
            <div>
           <h2 className="text-2xl font-bold mb-3 mt-4 text-center">Login</h2>

                  <form onSubmit={handleSubmit(onSubmit)}className="card-body">
                        <div className="form-control">
                              
                              <TextField style={{fontFamily:'Sora'}}  id="outlined-search1" label="Your email" type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email.."  />
                             
                              {errors.email && <span className="text-red-600">Email is required</span>}
                              
                          </div>
                          <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                 <TextField style={{fontFamily:'Sora'}} id="outlined-search" label="Your Password" type="password"  {...register("password", {
                                    required: true,
                                   
                                    
                                })} placeholder="Give your password..."  />
                               
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                
                               
                              
                                
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary font-Sora font-semibold" type="submit" value="Login Now" />
                            </div>
                            
                            
                        </form>
                        </div>
                        <p className='px-6 mb-3 font-Sora font-semibold text-center'><small>Are You New Here? <Link to="/register">Create an account</Link> </small></p>
                        <Social></Social>


</div>
    </div>
    );
};

export default Login;