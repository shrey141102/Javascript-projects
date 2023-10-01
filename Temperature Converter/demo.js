function convert(){
     const temperature = document.getElementById('temp').value
     const result1 = document.getElementById('unit1').value
     const result2 = document.getElementById('unit2').value
     if(result1 == 'celsius'){
          console.log("hello1")
          if(result2 == 'fahernheit'){
               document.getElementById('answer').innerHTML = ((9/5) * temperature) + 32
          }else if(result2 == 'kelvin'){
               document.getElementById('answer').innerHTML = (temperature+273.15)
          }else{
               document.getElementById('answer').innerHTML = "Invalid covertion, please try again"
          }
     }else if(result1 == 'fahernheit'){
          console.log("hello2")
          if(result2 == 'celsius'){
               document.getElementById('answer').innerHTML = (temperature - 32) * (5/9)
          }else if(result2 == 'kelvin'){
               document.getElementById('answer').innerHTML = ((temperature - 32) * (5/9) + 273.15)
          }else{
               document.getElementById('answer').innerHTML = "Invalid covertion, please try again"
          }
     }else if(result1 == 'kelvin'){
          console.log("hello3")
          if(result2 == 'celsius'){
               document.getElementById('answer').innerHTML = (temperature-273.15)
          }else if(result2 == 'fahernheit'){
               document.getElementById('answer').innerHTML = ((temperature - 273.15) * (9/5) + 32)
          }else{
               document.getElementById('answer').innerHTML = "Invalid covertion, please try again"
          }
     }
}