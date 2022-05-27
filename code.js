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
    // här får vi elementbyid med tid.
    document.getElementById('date').innerHTML = text;
    tdmy.innerHTML=currentTime;
  }
  
  //klockans sekunds intervall
  setInterval(clockTick, 1000);

  console.log(currentTime);