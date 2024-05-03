const circleColor=[];
function circleIntersect(x0,y0,r0,x1,y1,r1) {
    return Math.hypot(x0-x1,y0-y1)<= r0+r1;
}
function logIfIntersectionCircle() {
    console.log(circleColor)
    const firstCicle=circleColor[0];
    const secondCircle=circleColor[1];
    const x0=firstCicle.x;
    const x1=secondCircle.x;
    const r0=firstCicle.r
    const y0=firstCicle.y;
    const y1=secondCircle.y
    const r1=secondCircle.r;

    return circleIntersect(x0,y0,r0,x1,y1,r1);
    
}
document.addEventListener("click",(e)=>{
    const totalCircle=document.querySelectorAll(".circle");
    if(totalCircle.length==2){
        totalCircle.forEach((e)=>{
            document.body.removeChild(e);
            circleColor.shift();
        }
        
    );
       
    }
    const x=e.clientX;
    const y=e.clientY;
    
    console.log("x= ",x,"y= ",y);

    const randomNo=Math.random();
    const radius=Math.floor(Math.random()*(200-50)+50);
    const r=radius;
    circleColor.push({x,y,r});
    const circle=document.createElement("div");
    circle.classList.add("circle");
    circle.style.top=y-(radius)+"px";
    circle.style.left=x-(radius)+"px";
    circle.style.width=radius*2+"px";
    circle.style.height=radius*2+"px";
    document.body.appendChild(circle);

    if(circleColor.length==2){
        const res=logIfIntersectionCircle();
            console.log("Intersection "+res);
        
    }
})

