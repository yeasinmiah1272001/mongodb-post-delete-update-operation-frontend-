import { createBrowserRouter } from "react-router-dom";
import PostUser from "../component/PostUser/PostUser";
import DisplayUser from "../component/DisplayUser/DisplayUser";
import UpdateData from "../component/UpdateData/UpdateData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser></PostUser>,
  },
  {
    path: "/users",
    element: <DisplayUser></DisplayUser>,
    loader:()=>fetch("http://localhost:5000/users")
  },
  {
    path: "/users/:id",
    element: <UpdateData></UpdateData>,
    loader:({params})=>{
      console.log(params);
      return fetch(`http://localhost:5000/users/${params.id}`);

    },
    
  },
]);
export default router;