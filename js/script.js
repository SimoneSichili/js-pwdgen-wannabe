// variabili da prompt
var name = prompt("Qual'è il tuo nome?");
console.log(name);

var surname = prompt("Qual'è il tuo cognome?");
console.log(surname);

var color = prompt("Qual'è il tuo colore preferito?");
console.log(color);

// variabile password da mostrare
var password = name + surname + color + "19";
console.log(password);

document.getElementById("my-password").innerHTML = password;
