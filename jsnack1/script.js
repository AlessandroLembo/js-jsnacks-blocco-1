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
2 - Array vuoto che andrà a contenere 10 numeri inseiriti dall'utente.
3 - Dichiaro una variabile in cui andrò a inserire la somma dei numeri.
4 - Dichiaro una variabile per la validazione.
5 - Chiedere all'utente di inserire 10 numeri.
6 - Calcolare la somma dei numeri inseriti.
7 - Stampare in pagina.
*/

// 1 - Prendo l'elemento dalla pagina.
const sumElement = document.getElementById('sum');

// 2 - Array vuoto che andrà a contenere 10 numeri inseiriti dall'utente.
const numbersSum = [];

// 3 - Dichiaro una variabile in cui andrò a inserire la somma dei numeri.
let result = 0;

// 4 - Dichiaro una variabile per la validazione.
let isValid = true;

/* 5e6 - Chiedo all'utente di inserire 10 numeri
         e ne calcolo la somma */
while (numbersSum.length < 10){
  const userNumbers = parseInt(prompt('Inserisci un numero').trim());
  console.log(userNumbers);

  if (isNaN(userNumbers)){
    isValid = false;
  } else {
    numbersSum.push(userNumbers);
    result += userNumbers;
  }
  
}
    

// 7 - Stampa in pagina
console.log(`La somma dei numeri è uguale a ${result}`);
sumElement.innerText = `La somma dei numeri è uguale a ${result}`;

