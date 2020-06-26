let rs = require('readline-sync')

console.log("Olá, usuário")


let saldo = 10

let saque = 5

// caso seja um if simples ( "?" ":" = operador ternario)
saque <= 10 ? console.log("saque valido") : console.log("saque invalido")

let fileira = rs.question("...fileira?")
switch(fileira) {
    case "A":
        console.log("Você escolheu a fileira da janela!")
    case "B":
        console.log("Você vai ficar no meio de duas outras pessoas :/")
    default:
        console.log("Fileira inválida!")
}