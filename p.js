// const myTimeout=setTimeout
// (callME,1000);
// let data=0
// setInterval(callME,2000)
// function callME(){
// console.log("data")
//     let dataa=document.getElementById('id-container')
//     dataa.innerText+="Pratik"+data
//     data++;
//     // clearInterval(timeout)
// }

//Start And Stop Button 
// let data=1  
// let interval =""
// function Begin(){
//     interval=setInterval(start1,1000)
// }
// function start1(){
// console.log("data")
//     let dataa=document.getElementById('timeOut')
//     dataa.innerText=data
//     data++;
// }
// function stop2(){
//     clearInterval(interval)
// }

// let [seconds,minutes,hours]=[0,0,0]



let timer = document.getElementById("timer")
let minDoc = document.getElementById("min")
let houre = document.getElementById("hours")

let inter=''
let seconds=0
let min=0
let hours=0

function starttimer(){
    inter = setInterval(starttimer1,1000)
}
function starttimer1(){
    console.log("second")
    seconds++
    if( seconds <= 59){
    if(seconds <= 9){
        timer.innerHTML="0"+ seconds
    }else{
        timer.innerHTML= seconds;
    }
}
    else if(seconds > 59){
        console.log("minute")
        seconds=0;
        timer.innerHTML="00";
        min++;
          if(min <= 9 ){
             minDoc.innerHTML="0" + min;
          } else{
             minDoc.innerHTML= min;
          }
        }
        if( min <= 59){
            if(min <= 9){
                minDoc.innerHTML="0"+ min
            }else{
                minDoc.innerHTML= min;
            }
        }
            else if(min > 59){
                console.log("hour")
                min=0;
                minDoc.innerHTML="00";
                hours++;
                  if(hours <= 9 ){
                     houre.innerHTML="0" + hours;
                  } else{
                    houre.innerHTML= hours;
                  }
                }
   
    }

function stoptimer(){
    timer = clearInterval(inter)
}


