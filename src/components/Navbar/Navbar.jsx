import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineTaskAlt } from "react-icons/md";

import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const{user,logout}=useContext(AuthContext)
  const navigate=useNavigate()

    const navOptions = <>
    <li className="font-sans font-semibold "><NavLink to='/'>Home</NavLink></li>
    <li className="font-sans font-semibold"><NavLink  to="/about">About</NavLink></li>
    <li className="font-sans font-semibold"><NavLink  to="/features">Features</NavLink></li>

    
   

   
</>
 const [isScrolled, setIsScrolled] = useState(false);
 const handleLogOut=()=>{
        logout()
        .then(() => {     
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'logged out successfully',
            showConfirmButton: false,
            timer: 1500

          
        })
        navigate('/')
      }
 
  )
      .catch(error => console.log(error));
}

 useEffect(() => {
     const handleScroll = () => {
         const scrollTop = window.scrollY;
         setIsScrolled(scrollTop > 0);
     };

     window.addEventListener('scroll', handleScroll);

     return () => {
         window.removeEventListener('scroll', handleScroll);
     };
 }, []);
    return (
        <div className={`navbar justify-center mx-auto ${isScrolled ? 'scrolled fixed' : ''}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navOptions}
            </ul>
          </div>
          <div className="btn btn-ghost text-2xl font-sans text-green-700"><div className="text-green-900 mt-1"><MdOutlineTaskAlt></MdOutlineTaskAlt></div>Focus Flow</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
        {
            user ? <>
            {/* <span className="mx-4 font-Sora font-semibold">{user?.displayName}</span> */}
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
             
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                </div>
            </label>
                
                <button onClick={handleLogOut} className="btn btn-outline">LogOut</button>
            </> : ""
                
            
        }
        </div>
      </div>
    );
};

export default Navbar;