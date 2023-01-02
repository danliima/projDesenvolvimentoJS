// Transformar um número quebrado com 2 casas decimais e trocar o ponto por vírgula

let number = 23.4585658

//Tratando as casas decimais na quantidade que eu quero.
// console.log(number.toFixed(3))


console.log(number.toFixed(3).replace(".", ","))
