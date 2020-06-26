let rs = require('readline-sync')

console.log("Olá, usuário!")


console.log("Digite qualquer coisa")
let user1 = rs.question("")
console.log("Sua mensagem possui " + user1.length + " caracteres")


console.log("Digite novamente uma mensagem")
let user2 = rs.question("")
console.log("Sua mensagem possui " + user2.length + " caracteres")

    
switch (user1 > user2) {
    case true:
        console.log("Usuário 1 digitou mais caracteres");
        break;

    case false:
        console.log("Usuário 2 digitou mais caracteres");
        break;
}
