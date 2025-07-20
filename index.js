// querySelector = class ("." is mandatory)
// getElementById = id

const redLight = document.querySelector(".red")    
const yellowLight = document.querySelector(".yellow")
const greenLight = document.querySelector(".green")

const redBtn = document.querySelector(".btnRed")
const yellowBtn = document.querySelector(".btnYellow")
const greenBtn = document.querySelector(".btnGreen")

//it resets all lights as the given color and when we click event then it applies a color to the a particular light and remaining all lights were off
function resetLights(){
     redLight.style.backgroundColor = 'rgba(226, 211, 211, 0.5)';
     yellowLight.style.backgroundColor ='rgba(226, 211, 211, 0.5)'
     greenLight.style.backgroundColor ='rgba(226, 211, 211, 0.5)'
}

//element.addEventListener(event, function, useCapture);
//element = redBtn
//event = click or press,mouseenter or mouseover,etc..
//function should be mandatory - may be arrow function or named function

redBtn.addEventListener('click',()=>{         //you can use mouseover so that when we put cursor on redbutton it will light up
    resetLights()
    redLight.style.backgroundColor='red';
})

yellowBtn.addEventListener('click',()=>{
    resetLights()
    yellowLight.style.backgroundColor='yellow';
})

greenBtn.addEventListener('click',()=>{
    resetLights()
    greenLight.style.backgroundColor='green';
})