import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import HomePage from "../Layouts/Pages/HomePage";
import CategoryNews from "../Layouts/Pages/CategoryNews";
import React from "react";

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
    element: <Home></Home>
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