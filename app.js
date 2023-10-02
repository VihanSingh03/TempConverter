let celciusinput=document.querySelector('#celcius > input')
let FahrenheItinput=document.querySelector('#Fahrenheit > input')
let kelvinInput=document.querySelector('#kelvin > input')
let btn=document.querySelector('.button button')


function roundnumber(number){
    return Math.round(number*100)/100
}

celciusinput.addEventListener('input',function(){
    let ctemp=parseFloat(celciusinput.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp+273.15

    FahrenheItinput.value=roundnumber(ftemp)
    kelvinInput.value=roundnumber(ktemp)
})

function roundnumber(number){
    return Math.round(number*100)/100
}

FahrenheItinput.addEventListener('input',function(){
    let ftemp=parseFloat(FahrenheItinput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=(ftemp-32)*(5/9)+273.15
    celciusinput.value=roundnumber(ctemp)
    kelvinInput.value=roundnumber(ktemp)
})

kelvinInput.addEventListener('input',function(){
    let ktemp=parseFloat(kelvinInput.value)
    let ctemp=ktemp-273.15
    let ftemp=(ktemp-32)*(9/50)+32
    celciusinput.value=roundnumber(ctemp)
    FahrenheItinput.value=roundnumber(ftemp)
})

btn.addEventListener('click',function(){
    celciusinput.value=""
    FahrenheItinput.value=""
    kelvinInput.value=""
})