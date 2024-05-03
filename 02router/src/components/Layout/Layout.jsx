import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
   <Footer/>
   <Outlet />
 
    </>
  )
}

export default Layout