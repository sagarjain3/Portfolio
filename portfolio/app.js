let hamburger = document.querySelector("#icon")
let nav =  document.querySelector(".nav2")
let cross =  document.querySelector(".cross")

let a =document.querySelectorAll(".list2 a")





hamburger.addEventListener("click",()=>{
    nav.style.transform=" translateX(0)"
})

cross.addEventListener("click",()=>{
    nav.style.transform=" translateX(-100%)"
})

a.forEach((e)=>{
    e.addEventListener("click",()=>{
           nav.style.transform=" translateX(-100%)"
    })
})



