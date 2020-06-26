let rs = require('readline-sync')

console.log("Olá, usuário!")

console.log("Você está usando máscara quando precisa sair de casa?")
let mascara = rs.question("")

console.log("Você está lavando as mãos regularmente?")
let maos = rs.question("")


let comparacao = (mascara=="sim" && maos=="sim") ? 1 : 3
comparacao = (mascara=="nao" && maos=="nao") ? 2 : comparacao
comparacao = mascara!=maos ? 3 : comparacao

switch ( comparacao ) {
  case 1 :
    console.log("Parabéns!");
    break;
  case 2:
    console.log("Que vergonha!");
    break;
  default:
    console.log("Siga as recomendações da OMS");
    break;
}











