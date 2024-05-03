import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Layout from './components/Layout/Layout.jsx'
import Error from './components/Error/Error.jsx'
import User from './components/User/User.jsx'
import Weather from './components/Weather/Weather.jsx'
import LoginForm from './components/LoginForm/Loginform.jsx'
import Filter from './components/Filter/Filter.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='user/:userid' element={<User />} />
    <Route path='user/:userid/:passWord' element={<User />} />
    <Route  path='/weather' element={<Weather/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/filter' element={<Filter/>}/>
    <Route element={<Error/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
