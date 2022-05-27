let nextBtn=document.querySelector('.nextBtn');

let prevBtn=document.querySelector('.prevBtn');

let container=document.querySelector('.images');

let counter=0;

nextBtn.addEventListener('click',nextSlide);

prevBtn.addEventListener('click',prevSlide);

function nextSlide(){
    if(counter ===16){ 
    counter=-1;
    }
    counter++;
container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
}

function prevSlide(){
    if(counter ===0){ 
    counter=17;
    }
    counter--;
container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
}
//tog lite av ideerna ifrån stack//w3school Så jag såg hur koden skulle se ut Och google.