/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

const userNumber1 = prompt('inserisci il primo numero');
const userNumber2 = prompt('inserisci il secondo numero');
const h1El = document.querySelector('h1');
if (userNumber1 > userNumber2) {
    console.log(userNumber1);
    h1El.insertAdjacentHTML('beforeend', userNumber1);
} else {
    console.log(userNumber2);
    h1El.insertAdjacentHTML('beforeend', userNumber2);
}