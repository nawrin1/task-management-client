import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Error from "../components/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Profile from "../pages/Dashboard/Profile/Profile";
import CreateTask from "../pages/Dashboard/CreateTask/CreateTask";
import Task from "../pages/Dashboard/Task/Task";
import AllTask from "../pages/AllTask/AllTask";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },{
          path:'/login',
          element:<Login></Login>
        },{
          path:'/register',
          element:<Register></Register>
        }]
    },
    {
      path:'dashboard',
      element:<DashboardHome></DashboardHome>,
      children:[
        {
          path:'profile',
          element:<Profile></Profile>
        },{
          path:'create',
          element:<CreateTask></CreateTask>
        },{
          path:'task',
          element:<AllTask></AllTask>
        }
      ]
    }
  ]);