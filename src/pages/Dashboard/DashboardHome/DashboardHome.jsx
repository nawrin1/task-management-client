import { NavLink, Outlet } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";


const DashboardHome = () => {
    return (
        <div>
                <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
  
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 min-h-full bg-green-200 text-base-content ">
    <h2 className="relative text-3xl text-slate-500 font-sans text-center mb-10"> Dashboard</h2>
                       <li className="font-sans font-semibold mb-3">
                            <NavLink to="/"><div className=" mb-[2px] text-[16px]"><MdHome></MdHome></div>Home</NavLink>
                        </li>
                       <li className="font-sans font-semibold mb-3">
                            <NavLink to="/dashboard/profile"><div className=" mb-[2px] text-[16px]"><CgProfile></CgProfile></div>Profile</NavLink>
                        </li>
                   
                       <li className="font-sans font-semibold mb-3">
                            <NavLink to="/dashboard/create"><div><BsListTask></BsListTask></div>Create Task</NavLink>
                        </li>
                       <li className="font-sans font-semibold mb-3">
                            <NavLink to="/dashboard/task"><div><BiTask></BiTask></div>Previous Task</NavLink>
                        </li>
                   
                       

    </ul>
  
  </div>
</div>

            
        </div>
    );
};

export default DashboardHome;