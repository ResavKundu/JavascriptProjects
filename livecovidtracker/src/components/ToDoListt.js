import React from 'react'

 const ToDoList2 = (props) => {
   
  return (
     <>
       <div className='todo_style'>
       
       <li >{props.text}</li>
       <button onClick={()=>{
        props.onSelect(props.id);
       }}>*</button>
       </div>

     </>

  )
}
export default ToDoList2;