let quotes = [
    {
        name: 'Tim',
        quote: '5 åringen cyklar på sin rosa cykel, och trampar runt bland, damm molnen på Mars.'
    },
    {
        name: 'Johan',
        quote:'Johan satte sig på toan men han fastnade i hålet, sen kom han loss, det var på håret och hade (triforce) tatuerat ifrån Zelda på låret.'
    },
    {
        name: 'Fille',
        quote:'Fille lekte med sin pille, vilket snille han såg på en kille, men det var gött för Fille, för det var det bästa han ville.'
    },
    {
        name: 'Ville',
        quote:'Ville snurrade runt i en cirkel på rasterna. Så dom andra barnen kallade honom för Virre.'
    },
    {
        name: 'Randy',
        quote: 'Randy var lite annorlunda till skillnad ifrån dom andra, så han blev kallad för Random'
    },
    {
        name: 'Stefan',
        quote: 'Stefan gick in i affären för han behövde handla, han gick till bäbis avdelningen, så tog han ett par blöjor för han behövde rena underkläder.'
    },
    {
        name: 'Kalle Anka',
        quote: 'Ordet (Läskeblask) är ett ord som jag lärde mig när jag läste Kalle-Anka tidningar som ungdom.'
    }
     //  {
    //      name: 'Erik Magnusson',
    //    quote: 'Jag kommer så klart få MVG när Gustav sett detta. :D'
    //}
];

let quoteBtn = document.querySelector('#quoteBtn');

let quote = document.querySelector('#quote');

let quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click',displayQuote);


function displayQuote(){

//for(quotes=0;0>7;i++){
//   console.log(quotes.length);
//}

let number=Math.floor(Math.random()*quotes.length);

quoteAuthor.innerHTML= quotes[number].name;

quote.innerHTML=quotes[number].quote;
}

/*
let x = [
    {
        name: 'author nr1', 
        quote: 'quote nr1'
    },
    {
        name: 'author nr2', 
        quote: 'quote nr2'
    },
    {
        name: 'author nr3', 
        quote: 'quote nr3'
    },
    {
        name: 'author nr4', 
        quote: 'quote nr4'
    },
    {
        name: 'author nr5', 
        quote: 'quote nr5'
    },
    {
        name: 'author nr6', 
        quote: 'quote nr6'
    },
    {
        name: 'author nr7', 
        quote: 'quote nr7'
    },
    {
        name: 'author nr8', 
        quote: 'quote nr8'
    }
];
*/

