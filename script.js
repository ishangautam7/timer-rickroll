var hr = prompt("Enter No. of hours");
var min = prompt("Enter No. of minutes");
var sec = prompt("Enter No. of seconds");

var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var seconds = document.querySelector('.seconds');

hour.setAttribute('value', hr);
minute.setAttribute('value', min);
seconds.setAttribute('value', sec);

var secs = hr * 3600000 + min * 60000 + sec * 1000;
var intervalID;

function start(){
    clearInterval(intervalID)
    intervalID = setInterval(reset, 1000);
}
function reset(){
    if (secs == 0){
        console.log("Time Up");
        let mySound = new Audio('beep.mp3');
        mySound.play();
        clearInterval(intervalID)
    }
    else{
        secs -= 1000;

        hr = Math.floor(secs / 3600000)
        min = Math.floor((secs % 3600000)/60000)
        sec = Math.floor(((secs % 3600000)%60000)/1000)

        hour.setAttribute('value', hr);
        minute.setAttribute('value', min);
        seconds.setAttribute('value', sec);
        
        hr = Math.floor(secs / 3600000)
        min = Math.floor((secs % 3600000)/60000)
        sec = Math.floor(((secs % 3600000)%60000)/1000)

        hour.setAttribute('value', hr);
        minute.setAttribute('value', min);
        seconds.setAttribute('value', sec);
    }
}
