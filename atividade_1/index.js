let rs = require('readline-sync')

console.log("Olá, passageiro!")

console.log("Qual o número do seu vôo?")
let numVoo = rs.questionFloat("")

console.log("Em qual fileira deseja sentar?")
let fileira = rs.question("")
switch(fileira) {
    case "A":
        console.log("Você escolheu a fileira da janela.");
        break;
    case "B":
        console.log("Você vai se sentar entre duas pessoas.");
        break;
    case "C":
        console.log("Você se sentará na fileira do corredor.");
        break;
    default:
        console.log("Fileira não disponível");
        break;
}

console.log("Cartão de embarque para o vôo de número: " + numVoo)