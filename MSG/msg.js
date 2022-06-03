let sendBtn = document.querySelector('#sendBtn');

let messageIn = document.querySelector('#messageIn');

let messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click',sendMsg)

function sendMsg(){

 let x = messageIn.value;    
 
 //console.log(x);

 if(x===''){
    alert('Du glömde skriva i rutan. (^_^)');
 }else{
    messageOut.innerHTML=x;

    messageIn.value=''; 
 };
 }
 // TOG HJÄLP AV W3 SCHOOL STACK OCH SÖKTE PÅ RESTEN SEN BYGGDE IHOP PÅ EGET SÅG HUR DET SKULLE SE UT I SLUTET FÖR EGET SYFTE på projektet.
 function clockTick() {
    let currentTime = new Date(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        year = currentTime.getFullYear(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
    // här får vi elementbyid med tid.
    document.getElementById('date').innerHTML = text;
    date.innerHTML=currentTime;
  }
  
  //klockans sekunds intervall
  setInterval(clockTick, 1000);

 // console.log(currentTime);