import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import HomePage from "../Layouts/Pages/HomePage";
import CategoryNews from "../Layouts/Pages/CategoryNews";
import React from "react";
import Login from "../Layouts/Pages/login";
import Register from "../Layouts/Pages/Register";
import Authlayout from "./Authlayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"",
        element:<HomePage></HomePage>
      },
      {
        path:"/category/:id",
        element:<CategoryNews></CategoryNews>,
        loader:()=>fetch('/public/demo-data/news.json')
      }
    ]

  },
  {
    path:"/auth",
    element: <Authlayout></Authlayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      }
    ]
  },
  {
    path:"/news",
    element: <h1>News Page</h1>
  },
  {
    path:"/*",
    element: <h1>404 Page Not Found</h1>
  },

]);

export default Router;