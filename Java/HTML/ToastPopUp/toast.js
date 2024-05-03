// const horPos=document.getElementById("horizontal-position");
// const input=document.getElementById("duration");
// console.log(input.value)
    const horPos=document.getElementById("horizontal-position");
    const verPos=document.getElementById("vertical-position");
    const toastType=document.getElementById("toast-type");
    const toastContainer=document.querySelector(".toasts-container");
    const toastMessage=document.querySelector("#input");
    const duration=document.getElementById("duration");
function getVal(){
    // croos icon
    const closeIcon=document.createElement("span");
    closeIcon.innerHTML=`<i class="fas fa-times-circle"></i>`;
    const newToast=document.createElement("div");
    newToast.classList.add("toast");

    // if(toastType.value==="success"){
    //     newToast.innerHTML=`<i class="fas fa-solid fa-check"></i>${ toastMessage.value }<i class="fas fa-times-circle"></i>`;
    // }else if(toastType.value==="warning"){
    //     newToast.innerHTML=`<i class="fas fa-exclamation-triangle"></i>${ toastMessage.value }<i class="fas fa-times-circle"></i>`;
    // }else if(toastType.value==="error"){

    // }else if(toastType.value==="info"){

    // }
    newToast.classList.add(toastType.value);  //
    newToast.innerHTML=`${toastMessage.value} `;
    newToast.appendChild(closeIcon);
    toastContainer.appendChild(newToast);
    closeIcon.addEventListener("click",()=>{
        newToast.remove();
        console.log(newToast);
    })
    setTimeout(()=>{
        newToast.remove();
    },parseInt(duration.value)*1000);
    console.log(duration.value);
    if(horPos.value==="right"){
       toastContainer.classList.add("right");
    }else{
        toastContainer.classList.remove("right");
    }
    if(verPos.value==="buttom"){
        toastContainer.classList.add("buttom");
     }else{
         toastContainer.classList.remove("buttom");
     }
    
    // console.log(horPos.value);
    // console.log(verPos.value);
    // console.log(toastType.value);
    // console.log(toastMessage.value);
    toastMessage.value="";
}