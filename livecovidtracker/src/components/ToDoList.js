import React, { useState } from 'react'
import ToDoList2 from './ToDoListt';
 const ToDoListt = () => {
    const [inputlist,setInputList]=useState();
    const [items,setItems]=useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    }
    const listofItems=()=>{
          setItems((oldItems)=>{
            return [...oldItems,inputlist];
          })
          setInputList("");
    }
    const deletItem=(id)=>{
        console.log('deleted');
        setItems((oldItems)=>{
            return oldItems.filter((arrayElem,index)=>{
                return index!==id;
            })
        })
    }
  return (

    <div className='main-div'>
        <div className='center-div'>
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" placeholder='Add Item' value={inputlist} onChange={itemEvent}/>
            <button onClick={listofItems}>+</button>
            <ol>
                
                { items.map( (itemval,index)=>{
                   return <ToDoList2 key={index}text={itemval} 
                   id={index}
                    onSelect={deletItem}
                   />
                 } )}
            </ol>
        </div>
    </div>
  )
}
export default ToDoListt