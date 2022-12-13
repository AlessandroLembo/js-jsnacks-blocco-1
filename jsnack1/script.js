console.log(' JS OK ');

/*
TRACCIA:

SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero. 
(qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti.
*/

/*
ANALISI

1 - Prendo l'elemento dalla pagina.
2 - Dichiaro una variabile in cui andrò a inserire la somma dei numeri.
3 - Chiedere all'utente 10 volte di inserire un numero.
4 - Calcolare la somma dei numeri inseriti.
5 - Stampare in pagina.
*/

// 1 - Prendo l'elemento dalla pagina.
const sumElement = document.getElementById('sum');


// 2 - Dichiaro una variabile iin cui andrò a inserire la somma dei numeri.
let numbersContainer = 0;


/* 3e4 - Chiedo all'utente 10 volte di inserire un numero
         e ne calcolo la somma */
for (let i = 1; i <= 10; i++) {
    const userNumbers = parseInt(prompt("Inserisci un numero").trim());
    numbersContainer += userNumbers;
}

// 5 - Stampa in pagina
console.log(numbersContainer);
sumElement.innerText = numbersContainer;

