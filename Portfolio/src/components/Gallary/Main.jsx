import React from 'react'
import Menu from './Menu';
const Main = () => {
  return (
    <>
        <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
        <hr/>
        <div className='menu-tabs container'>
            <div className='menu-tab d-flex justify-content-around'>
                <button className='btn btn-warning'>Breakfast</button>
                <button className='btn btn-warning'>Lunch</button>
                <button className='btn btn-warning'>Evening</button>
                <button className='btn btn-warning'>Dinner</button>
            </div>
        </div>
    </>
  )
}
export default Main