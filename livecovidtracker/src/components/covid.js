import React,{useEffect,useState} from 'react'
import './covid.css';
const Covid=()=> {
    const[data,setData]=useState([]);
    const getCovidData= async()=>{
        try{
            const res= await fetch('https://data.covid19india.org/data.json')
            const actualData=await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
        
    }
    useEffect(()=>{
         getCovidData();
    },[]);
  return (
      <>
      <section>
      <h1>Resav Live</h1>
        <h2>COVID-19 CORONAVIRIUS TRACKER</h2>
        <ul className="card">
            <li className="card1">
                <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>OUR</span> COUNTRY</p>
                         <p className="card_total">INDIA</p>
                    </div>
                </div>
            </li>

            <li className="card2">
                <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>TOTAL</span> RECOVERY</p>
                         <p className="card_total">{data.recovered}</p>
                    </div>
                </div>
            </li>

            <li className="card3">
                <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
                         <p className="card_total">{data.confirmed}</p>
                    </div>
                </div>
            </li>

            <li className="card4">
                <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>TOTAL</span> DEATH</p>
                         <p className="card_total">{data.deaths}</p>
                    </div>
                </div>
            </li>

            <li className="card5">
                <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                         <p className="card_total">{data.active}</p>
                    </div>
                </div>
            </li>

            <li className="card6">
                <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>TOTAL</span> UPDATED</p>
                         <p className="card_total">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
        </section>
      </> 
  )
}

export default Covid
