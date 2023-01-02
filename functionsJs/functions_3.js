// Daclarando funções em variáveis

//function expression
//function anonymus

//parâmetros (parameters)

//Retornando valores dentro da função

// devemos sempre usar o let
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25


console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)