import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

import { useNavigate } from "react-router-dom";
import axios from "axios";



const Social= () => {
    const { googleSign} = useContext(AuthContext)
  
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        console.log("google ")
        googleSign()
        .then(result =>{
            
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo:result.user.photoURL
            }
            axios.post('http://localhost:5000/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/dashboard/profile');
            })
            
        })
    }

    return (
        <div className=" mx-7 ">
          
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-sm bg-emerald-400 w-full">
                    <FaGoogle className=""></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default Social;