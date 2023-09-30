const popup=document.getElementsByClassName("popupbackground")
const input=document.getElementsByClassName("popupinput")
const mainBody=document.getElementsByTagName("body")
console.log(mainBody[0])
function displayPopup(){
    popup[0].classList.remove("noneDisplay")
}
function removePopup(){
    popup[0].classList.add("noneDisplay")
}
function addTodo(){
    if(input[0].value===""){
        alert("please enter something")
    }else{
        let div=document.createElement("div")
        let button=document.createElement("button")
        button.classList.add("deletebutton")
        button.innerHTML="X"
        div.classList.add("EachTodo")
        div.innerHTML=input[0].value
        div.appendChild(button)
        mainBody[0].appendChild(div)
        input[0].value=""
        removePopup()
    }
}
mainBody[0].addEventListener("click",function(e){
 console.log(e.target.classList.value)
 if(e.target.classList.value==="deletebutton"){
    e.target.parentElement.remove()
 }
})