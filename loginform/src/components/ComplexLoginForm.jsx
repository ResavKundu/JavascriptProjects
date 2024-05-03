import React, { useState } from 'react'

 const ComplexLoginForm = () => {
    // const[fullName,setFullNmame]=useState();
    const [fullName,setFullName]=useState({
        name:"",
        email:"",
    });
    const inputEvent=(event)=>{
       const value=event.target.value;
       console.log(value);
       const name=event.target.name;
       console.log(name);

       setFullName((preValue)=>{
          if(name==="username"){
            return{
                name: value,
                email:preValue.email,
            };
          }else  if(name==="password"){
            return{
                name: preValue.name,
                email:value,
            };
          }
       })
    }
    function submitButton(e) {
        e.preventDefault();
        
    }

  return (
    <>
    <h1>Hello {fullName.name}</h1>
    <h4>{fullName.email}</h4>
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
    <h2 className="text-2xl font-semibold mb-6 text-blue-500">Login Form</h2>
    <form onSubmit={submitButton}>
      <div className="mb-4">
        <label for="username" className="block text-gray-700">Username</label>
        <input type="text" id="username" name="username" 
          className="mt-1 px-4 py-2 w-full border rounded-md"
          onChange={inputEvent}
        />
      </div>
      <div className="mb-4">
        <label for="password" className="block text-gray-700">Password</label>
        <input type="password" id="password" name="password" 
        className="mt-1 px-4 py-2 w-full border rounded-md"
        onChange={inputEvent}
        />
      </div>
      <div className="mb-4">
        <label for="email" className="block text-gray-700">Email</label>
        <input type="email" id="email" name="email" 
        className="mt-1 px-4 py-2 w-full border rounded-md"
        onChange={inputEvent}
        />
      </div>
      <div className="mb-4">
        <label for="phone" className="block text-gray-700">Phone</label>
        <input type="phone" id="phone" name="phone" 
        className="mt-1 px-4 py-2 w-full border rounded-md"
        onChange={inputEvent}
        />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
      </div>
    </form>
  </div>
    </>
  )
}
export default ComplexLoginForm