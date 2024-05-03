import React from 'react'

const Filter = () => {
   const click=(event)=>{
    console.log(event.target.dataset.category);
    if(event.target.dataset.category != undefined){
        filterSearch(event.target.dataset.category);
    }      
   }
   const filterSearch=(value)=>{
      const gallery=document.querySelectorAll(".images");
      gallery.forEach((curElem)=>{
        
        console.log(curElem.dataset.category);
        if(curElem.dataset.category===value){
            curElem.style.display="block";
        }else if(value=== "all"){
            curElem.style.display="block";
        }
        else{
            curElem.style.display="none";
        }
      })
   }
  return (
    <>
        <section className="menu_tab">
            <ul className="tabs flex" onClick={click}>
                 <li  data-category="all" className='mr-2 text-amber-300 cursor-pointer'>All</li>
                 <li data-category="animal" className='mr-2 text-amber-300 cursor-pointer'>animal</li>
                 <li data-category="bird" className='mr-2 text-amber-300 cursor-pointer'>bird</li>
                 <li data-category="nature" className='mr-2 text-amber-300 cursor-pointer'>nature</li>
            </ul>
        </section>
        <section className="menu-images">
            <div className="images" data-category="bird">
                <img src='https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?cs=srgb&dl=pexels-pixabay-349758.jpg&fm=jpg'
                alt='Bird Image'
                className='bird'
                />
            </div>
            <div className="images" data-category="nature">
                <img src='https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='Nature Image'
                className='bird'
                />
            </div>
            <div className="images" data-category="animal">
                <img src='https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='Animal Image'
                className='animal'
                />
            </div>
        </section>
        
    </>
  )
}

export default Filter