import React, { useEffect, useState } from 'react'

 const Weather = () => {
    const [city,setCity]=useState({});
    const [search,setSearch]=useState("Mumbai");
    useEffect(()=>{
        const fetApi=async()=>{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e8de82cc0ac7b749b6494dea04dcfda6`;
            const response=await fetch(url);
            const resJSON=await response.json();
            setCity(resJSON.main)
            console.log(resJSON)
        }
        fetApi();
       // console.log(city)
    },[search]);
  return (
    <>
        <div className='box-border h-52 w-322 p-4 border-4 ...'>
     <input   type='text' defaultvalue="" className='placeholder:italic placeholder:text-green-400 block bg-black-400 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything...'
        onChange={(event)=>{
            setSearch(event.target.value)
        }}
     />
       {!city ?(<p>No Data Found</p>):(

        <div>
        <div className='info'>
            <h2 className='location'>
                <i>{search}</i>
            </h2>
            <h1 className='temp'>
                {city.temp}
            </h1>
            <h3 className='tempmin_max'>{city.temp_max}</h3>
        </div>
</div> 

       )}
   </div>
    </>
  )
}
export default Weather

 
