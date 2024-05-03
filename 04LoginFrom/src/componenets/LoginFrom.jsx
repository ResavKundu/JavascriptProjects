import React, { useState } from 'react'

 const Loginform = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[fullName,setfullname]=useState();
  const[fullemail,setFullEmail]=useState();
  const click=(e)=>{
    e.preventDefault();
    setfullname(name);
    setFullEmail(email);
  }
  return (
    <>
        <h1>Hello {fullName} {fullemail}</h1>
         
        <div class="max-w-md mx-auto bg-white rounded-lg p-8 shadow-lg">
        <h1 class="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={click}>
            <div class="mb-4">
                <label for="username" class="block text-gray-700 font-bold mb-2">Username</label>
                <input type="text" id="username" name="username" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                placeholder="Enter your username" 
                onChange={(e)=>{
                  setName(e.target.value)
                }}
                required/>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                placeholder="Enter your email" 
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
            </div>
            <div class="flex justify-center">
                <button type="submit" class="bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700" 
                name="submit"
               >Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}
export default Loginform