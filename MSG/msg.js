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
 // TOG HJÄLP AV W3 SCHOOL STACK OCH SÖKTE PÅ RESTEN SEN BYGGDE IHOP PÅ EGET.
 function clockTick() {
    let currentTime = new Date(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        year = currentTime.getFullYear(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
    // here we get the element with the id of "date" and change the content to the text variable we made above
    document.getElementById('date').innerHTML = text;
    tdmy.innerHTML=currentTime;
  }
  
  // here we run the clockTick function every 1000ms (1 second)
  setInterval(clockTick, 1000);

  console.log(currentTime);