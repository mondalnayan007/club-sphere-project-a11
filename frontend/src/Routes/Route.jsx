import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
        path: "/",
        element: <Home />   
    },
    

]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element: <SignUp />
  }
]);