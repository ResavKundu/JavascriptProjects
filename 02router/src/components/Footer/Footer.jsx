import React from 'react'
import {Link} from 'react-router-dom'
 const Footer = () => {
  return (
    <>
        <Link to='/' className="hover:underline">Home</Link>
        <span> </span>
        <Link to='/about' className="hover:underline">About</Link>
        <span> </span>
        <Link to='user/:userid' className='hover:underline'>User</Link>
    </>
  )
}
export default Footer