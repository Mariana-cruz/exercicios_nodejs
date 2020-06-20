let rs = require('readline-sync')

console.log("Olá, usuário!")

console.log("Você está usando máscara quando precisa sair de casa?")
let mascara = rs.question("")

console.log("Você está lavando as mãos regularmente?")
let maos = rs.question("")


if ( mascara + maos == "sim"){
  console.log("Parabéns, você está seguindo as recomendações da OMS!")
}

else {
    console.log("Que vergonha! Deveria se preocupar com a sua saúde e da sua família.")
}