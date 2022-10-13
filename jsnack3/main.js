/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.  */

// const body = document.querySelector('body')
// let somma = 0;
// for (let i = 0; i < 10; i++) {
//     const userNumber = Number(prompt('Inserisci un numero:'));
//     somma += userNumber;
// }
// console.log(somma);
// body.innerHTML = somma;


/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.  con ciclo For */


const body = document.querySelector('body')
let somma = 0;
let i = 0
while (i < 10) {
    const userNumber = Number(prompt('Inserisci un numero:'));
    somma += userNumber;
    i++;
}
console.log(somma);
body.innerHTML = somma;