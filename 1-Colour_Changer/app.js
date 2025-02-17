const button = document.querySelectorAll(".button")
const body = document.querySelector("body")
button.forEach((b)=>{
   b.addEventListener("click",(e)=>{
    if(e.target.id == "grey"){
        body.style.backgroundColor = "grey";
    }
    if(e.target.id == "red"){
        body.style.backgroundColor = "red";
    }
    if(e.target.id == "blue"){
        body.style.backgroundColor = "blue";
    }
    if(e.target.id == "yellow"){
        body.style.backgroundColor = "yellow";
    }
   })
})
