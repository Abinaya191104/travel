// selecting popup,overlay,plus button

var popup=document.querySelector(".popup")
var overlay=document.querySelector(".overlay")
var plus1=document.getElementById("plus")
var ipform=document.querySelector(".ipform")
//to have no previous content in the form
var placeip=document.getElementById("place-ip")
var placedesip=document.getElementById("place-des-ip")


plus1.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display="block"
    placeip.value=""
    placedesip.value=""
    overlay.style.display="block" 
})

// selecting cancel button

var cancelbtn=document.getElementById("cancel-popup")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display="none"
    overlay.style.display="none"
})

//selecting add button,container,place title,place description

var container=document.querySelector(".container")
var addbtn=document.getElementById("add-content") //from pop up 
var placeip=document.getElementById("place-ip")
var placedesip=document.getElementById("place-des-ip")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h3> ${placeip.value} </h3>
    <h5>${placedesip.value} </h5>
    <button onclick="delcon(event)"> DELETE </button>`
    container.append(div)
    popup.style.display="none"
    overlay.style.display="none"
})

//selecting dele content button
function delcon(event)
{
    event.preventDefault()
    event.target.parentElement.remove()
}
