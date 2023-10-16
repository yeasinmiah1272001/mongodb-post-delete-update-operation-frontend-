import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DisplayUser = () => {
  const users = useLoaderData();
   const [updatedUser, setUpdatedUser] = useState(users);
  console.log(users);

  const  handleDelete = _id =>{
       console.log(_id)

       fetch(`http://localhost:5000/users/${_id}`, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           if(data.deletedCount>0){
              alert("Deleted successfully");
           }
             const filterData = updatedUser.filter((item) => item._id !== _id);
             setUpdatedUser(filterData);
         });

  };

  return (
    <div>
      <h1>This is user {users.length}</h1>

      {updatedUser.map((user) => (
        <div
          key={user._id}
          className="space-y-5 border bg-red-500 p-5 shadow-2xl"
        >
          <h1>Name: {user.name}</h1>
          <h1>Email: {user.email}</h1>
          <button
            className="btn btn-primary"
            onClick={() => handleDelete(user._id)}
          >
            Delete
          </button>

          <Link to={`/users/${user._id}`}>
            <button className="btn btn-secondary">Updated</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayUser;
