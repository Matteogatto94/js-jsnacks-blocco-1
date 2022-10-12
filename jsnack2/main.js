/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstWord = prompt('Inserisci la prima parola:');
const secondWord  = prompt('Inserisci la seconda parola:');
const body = document.querySelector('body')

if (firstWord.length>secondWord.length){
    console.log(firstWord);
    console.log(secondWord);
    body.innerHTML = firstWord +' '+ secondWord;
}else if (firstWord.length<secondWord.length){
    console.log(secondWord);
    console.log(firstWord);
    body.innerHTML = secondWord +' '+ firstWord;
} else{
    console.log('le due parole sono lunghe uguali');
    body.innerHTML = 'le due parole sono lunghe uguali';
}