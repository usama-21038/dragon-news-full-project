import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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