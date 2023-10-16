import React from 'react';
import { useLoaderData, useNavigate, } from 'react-router-dom';

const UpdateData = () => {
  const singleData = useLoaderData();
  console.log(singleData);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const myData = {
      name,
      email,
      password,
    };

    

    console.log(myData);

    fetch(`http://localhost:5000/users/${singleData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
         if (data.acknowledged) {
           alert("updated successfully");
         }
        
      });


  };

  return (
    <div className="bg-black">
      <div className="bg-gray-900 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>

          {/* Form */}
          <form onSubmit={handleUpdate}>
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name" 
                name="name"
                defaultValue={singleData?.name}
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
                defaultValue={singleData?.email}
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
                defaultValue={singleData?.password}
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateData;
