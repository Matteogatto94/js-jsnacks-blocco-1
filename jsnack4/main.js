//Snack 4 Blocco 1:
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let h1 = document.querySelector("#heading");

let names = ["Marceline", "Finn", "Jake", "IceKing"]

let userName = prompt("Insert your name to check if you're allowed inside")

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
        alert("You're allowed")
        h1.innerHTML = "You're allowed"
        break
    } else if (allowed == false && i == names.length-1){
        alert("You're not allowed")
        h1.innerHTML = "You're not allowed"
    }
}