let rs = require('readline-sync')

console.log("Olá, passageiro!")

console.log("Qual o número do seu vôo?")
let numVoo = rs.questionFloat("")

console.log("Em qual fileira deseja sentar?")
let fileira = rs.question("")

console.log("Cartão de embarque para o vôo de número:" + numVoo)
console.log("Você sentará na fileira " + fileira)

// fileiras ("a,b,c,d,f")
