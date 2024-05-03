import React from "react";
import { ReactDOM } from "react";

const Challange=()=>{

    let curDate=new Date(2024,4,2,9);
    curDate=curDate.getHours();
    let greeting="";
    const cssStyle={ };
    if(curDate>=1 && curDate<12){
        greeting="Good Morning";
        cssStyle.color = 'Green';
    }else if(curDate>=12 && curDate<19){
        greeting="Good Evening";
        cssStyle.color = 'Orange';
    }
    else if(curDate){
        greeting="Good Night";
        cssStyle.color = "White";
    }
   
    return(
     
        <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    );
}
export default Challange