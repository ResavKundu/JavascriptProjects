import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Homepage/Home'
import  About  from "./components/Aboutpage/About";
import  Contact  from "./components/Contact/Contact";
import  Service  from "./components/Service/Service";
import  Register  from "./components/Register/Register";
import  Login  from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar'
import Error from './components/Error/Error'
 const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error/>}/>
    </Routes>
  </Router>
  )
}
export default App;