import React from 'react'
import './cards.css'
import Sdata from './Sdata'
 const Cards = () => {

function ncard(val) {
    return(

        <Card
            imagesrc={val.imagesrcc}
            title={val.titlee}
            link={val.linkk}
        />
    )
}

   const Card= function Crad(props){
        return (
            <>
            <div className='template'>
                <div className='cards'>
                    <img src={props.imagesrc} alt='myPic' className='card_img'/>
                    <div className='card_info'>
                        <span className='card_catagory'></span>
                        <h3 className='card_title'>{props.title}</h3>
                        <a href={props.link} target='_blank'>
                            <button> Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
         </>
        )
    }
  return (
    <>
        
        
        
    {Sdata.map(ncard)}

    {Sdata.map((val)=>
        
    <Card
        imagesrc={val.imagesrcc}
        title={val.titlee}
        link={val.linkk}
    />
)}

        {/* <Card

            imagesrc={Sdata[1].imagesrcc}
            title={Sdata[1].titlee}
            link={Sdata[1].linkk}
        />
        <Card/> */}
         {/* <Card imagesrc="https://www.vishalmegamart.com/dw/image/v2/BGHT_PRD/on/demandware.static/-/Sites-vmm-gm-master-catalog/default/dw2e85a405/images/large/1240016018.jpg?sw=90&sh=90"
            title="Women Printed Jute Bag"
            link="https://www.vishalmegamart.com/en-in/women/accessories/ladies-bags-womens-printed-jute-shopping-bag-medium/1240016018.html"
        />
        <Card 
           imagesrc="https://5.imimg.com/data5/SELLER/Default/2023/3/292709660/UH/WT/KE/15414326/shopping-bag-fabric.jpg"
           title="Shopping Bag Fabric"
           link="https://m.indiamart.com/proddetail/shopping-bag-fabric-2850506521212.html"

        />
        <Card />  */}
    </>
  )
}
export default Cards;