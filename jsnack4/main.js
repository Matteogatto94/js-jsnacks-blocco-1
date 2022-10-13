//Snack 4 Blocco 1:
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let h1 = document.querySelector("#heading");

let names = ["Giovanni", "Riccardo", "Paolo", "Luigi"]

let userName = prompt("Inserisca il suo nome, prego!")

let allowed = false
/*
if(names.includes(userName)){
    alert("You're allowed")
} else{
    alert("you're denied")
}
*/
//Usando un ciclo

for(let i = 0; i < names.length; i++){

    if(userName == names[i]){
        allowed = true
    }

    if(allowed == true){
        alert("Lei è il benvenuto!")
        h1.innerHTML = "Lei è il benvenuto!"
        break
    } else if (allowed == false && i == names.length-1){
        alert("Vada via la prego!")
        h1.innerHTML = "Vada via la prego!"
    }
}