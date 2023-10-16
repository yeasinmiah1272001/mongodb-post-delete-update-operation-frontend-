import React from 'react';
import { json } from 'react-router-dom';

const PostUser = () => {

       const handlePost = e =>{
              e.preventDefault()
              const name = e.target.name.value;
              const email = e.target.email.value;
              const password = e.target.password.value;
              // console.log(name,email,password)

              const myData = {
                      name,
                     email,
                     password,

              }
              
              console.log(myData)
              fetch("http://localhost:5000/users",{
                     method:'POST',
                     headers:{
                           "content-Type": "application/json",
                     },
                     body:JSON.stringify(myData),
              })
                .then((res) => res.json())
                .then((data) => {
                     console.log(data)
                     if(data.acknowledged){
                            alert('data posted successfully')
                     }
                  
                });
       }



       return (
         <div className="bg-black">
           <div className="bg-gray-900 h-screen flex items-center justify-center">
             <div className="bg-white p-8 rounded shadow-md w-96">
               <h2 className="text-2xl font-semibold mb-4">Login</h2>

               {/* Form */}
               <form onSubmit={handlePost}>
                 {/* name */}
                 <div className="mb-4">
                   <label
                     htmlFor="Name"
                     className="block text-sm font-medium text-gray-600"
                   >
                     Name
                   </label>
                   <input
                     type="text"
                     id=""
                     name="name"
                     className="mt-1 p-2 w-full border rounded-md"
                   />
                 </div>
                 {/* Email Input */}
                 <div className="mb-4">
                   <label
                     htmlFor="email"
                     className="block text-sm font-medium text-gray-600"
                   >
                     Email
                   </label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     className="mt-1 p-2 w-full border rounded-md"
                   />
                 </div>

                 {/* Password Input */}
                 <div className="mb-6">
                   <label
                     htmlFor="password"
                     className="block text-sm font-medium text-gray-600"
                   >
                     Password
                   </label>
                   <input
                     type="password"
                     id="password"
                     name="password"
                     className="mt-1 p-2 w-full border rounded-md"
                   />
                 </div>

                 {/* Submit Button */}
                 <div className="flex items-center justify-between">
                   <button
                     type="submit"
                     className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                   >
                     Submit
                   </button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       );
};

export default PostUser;