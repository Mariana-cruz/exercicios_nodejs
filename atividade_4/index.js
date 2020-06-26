let rs = require('readline-sync')

console.log("Olá, usuário!")

console.log("Qual o seu dia de nascimento?")
let dia = rs.questionFloat('')

console.log("Beleza! Agora qual o mês?")
let mes = rs.questionFloat('')

console.log("Seu signo é: ")

// trocar if/else por switch/case

switch (mes){
    case 1: "1"
    dia <= 20 ? console.log ("Capricórnio") : console.log("Aquário");
    break;

    case 2 : "2"
    dia <=18 ? console.log("Aquário") : console.log("Peixes");
    break;

    case 3 :"3"
    dia <= 20 ?  console.log("Peixes") : console.log("Áries");
    break;

    case 4 : "4"
    dia <= 20 ?  console.log("Áries") : console.log("Touro");
    break;

    case 5 : "5"
    dia <= 20 ?  console.log("Touro") : console.log("Gêmeos");
    break;

    case 6 :"6"
    dia <= 20 ?  console.log("Gêmeos") : console.log("Câncer");
    break;

    case 7:"7"
    dia <= 22 ?  console.log("Câncer") : console.log("Leão");
    break;

    case 8 :"8"
    dia <= 22 ? console.log("Leão") : console.log("Virgem");
    break;

    case 9:"9"
    dia <= 22 ? console.log("Virgem") : console.log("Libra");
    break;

    case 10:"10"
    dia <=22 ? console.log("Libra") : console.log("Escorpião");
    break;

    case 11:"11"
    dia <= 21 ? console.log("Escorpião") : console.log("Sagitário");
    break;

    case 12:"12"
    dia <= 21 ? console.log("Sagitário") : console.log("Capricórnio");
    break;
}

console.log("E agora, qual seu ano de nascimento?")
let ano = rs.question('Ano\n')

let ano_atual = new Date () .getFullYear();

console.log(ano_atual - ano);
