import React,{useEffect,useState} from 'react'

 const BgChanger =()=> {
  const [colore,setColore]=useState("olive");
  

  function color(){
    console.log("kk"+colore);
 }
  
  
  
  return (
    <>
        
        <div className='w-full h-screen duration-200' style={{backgroundColor:colore}}>
                <button onClick={color}   className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-8 ...'> Red</button>
                {/* <button onClick={()=>setColore("green")} col="green" className='bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mx-8 ...'> Green</button>
                <button onClick={()=>setColore("blue")} col="blue" className='bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-8 ...'> Blue</button>
                <button onClick={()=>setColore("yellow")} col="yellow" className='bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-8 ...'> Yellow</button> */}
                
        </div>;
        </>
  )
}
export default BgChanger