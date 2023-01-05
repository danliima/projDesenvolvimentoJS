//Switch

// let expression = ''

// switch (expression) { // puxa a expressão para o switch
//   case 'a': // confere se o valor da expressão é o correto
//     console.log('a')
//     break // para a execução do switch apenas se verdadeiro
//   case 'b':
//     console.log('b')
//     break
//   default: // caso nenhum valor seja o correto, realizará a 
// 					 //instrução dentro de si.
//     console.log('default')
//     break
// }

//Trabalhando com o switch criando o código de uma calculadora simples

function calculadora(number1, operator, number2){
    let result = 0

    switch (operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
             break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
    }
    return result
}

console.log(calculadora(10, '+', 5))