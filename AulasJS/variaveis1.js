// Escopo determina a visibilidade de algumas variáveis

//var é local e também global

//hoisting: é o efeito que a var faz com a variável, ela coloca ele pra cima.

// console.log('> existe x antes do bloco?', x)

// {
//     var x = 0
// }

// console.log('> existe x antes do bloco?', x)

//Usamos geralmente let e const nas variáveis.

//Dica escrever os códigos em inglês

//Para sabermos o tipo de dado que temos na variável usamos o typeOf:

//declatação or declaration
// var name

//assignment or atribuição de valores
let nome = "Daniel"

//Que tipo de daod foi colocado na variável
console.log(typeof nome)

//Agrupamento de declarações

let age, isHuman

age = 20
isHuman = true

console.log(age, isHuman)

//Interpolando valores com template string (Ela sempre vai ser feita com crase no console.log)
console.log(`O ${nome} tem ${age} anos.` )
