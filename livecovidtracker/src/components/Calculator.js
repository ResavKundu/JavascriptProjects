function add(a,b){
    let sum=a+b;
    return sum;
}

function sub(a,b){
    let sub=a-b;
    return sub;
}

function multiply(a,b){
    return a*b;
}

function division(a,b){
    let div=a/b;
    div=div.toFixed(2);
    return div;
}
export {add,sub,multiply,division}


// we can add this in App.js
/* <ul >
          <li>Sum of teo no is {add(2,4)} </li>
          <li>Sum of teo no is {sub(8,4)} </li>
          <li>Sum of teo no is {multiply(2,3)} </li>
          <li>Sum of teo no is {division(4,2)} </li>
        </ul> */