const genderSelect=document.getElementById("gender")
const heightInput=document.getElementsByClassName("heightInput")
const ageInput=document.getElementsByClassName("AgeInput")
const weightInput=document.getElementsByClassName("WeightInput")
const popUp=document.getElementsByClassName("popupbackground")
const result=document.getElementsByClassName("popupheading2")
function calculate(){
    if(heightInput[0].value===""||ageInput[0].value===""||weightInput[0].value===""){
        alert("Please fill all the feilds")
    }
    else{
        const height=parseFloat(parseInt(heightInput[0].value)/100).toFixed(2)
        const weight=parseFloat(weightInput[0].value)
        const BMI=parseFloat(weight/(height*height)).toFixed(2)
        result[0].innerHTML=BMI
        popUp[0].classList.remove("noneDisplay")
    }
}
function OkeyClick(){
      popUp[0].classList.add("noneDisplay")
}