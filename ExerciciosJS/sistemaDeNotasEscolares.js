/* ## Transformar notas escolares

Crie um algoritimo que tranforme as notas do sistema numérico para sistema de noras em caracteres tipo A B C

*De 90 para cima - A
*Entre 80 - 89 - B
*Entre 70 - 79 - C
*Entre 60 - 69 - D
*Menor que 60  - F

*/

//Forma de resolução 1

// let score = 10

// if (score >= 90) {
//     console.log('Aprovado com Nota A')
// } else if (score >= 80 && score <= 89) {
//     console.log('Aprovado com Nota B')
// } else if (score >= 70 && score <= 79) {
//     console.log('Aprovado com nota C')
// } else if (score >= 60 && score <= 69) {
//     console.log('Aprovado com nota D')
// } else if(score <= 59) {
//     console.log('Reprovado com nota F')
// }else{
//     console.log('Nota inválida')
// }


//Forma de resolução 2

// let score = 66.8
// let approvedWithGradeA = score >= 90;
// let approvedWithGradeB = score >= 80 && score <= 89
// let approvedWithGradeC = score >= 70 && score <= 79
// let approvedWithGradeD = >= 60 && score <= 69
// let failedWithGradeF = score <= 59;

// if (approvedWithGradeA) {
//     console.log('Aprovado com Nota A')
// } else if (approvedWithGradeB) {
//     console.log('Aprovado com Nota B')
// } else if (approvedWithGradeC) {
//     console.log('Aprovado com nota C')
// } else if (approvedWithGradeD) {
//     console.log('Aprovado com nota D')
// } else if (failedWithGradeF) {
//     console.log('Reprovado com nota F')
// }

//Forma de resolução 3


function getScore (score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score >= 1 && score <= 59
    
    let scoreFinal;
    
    if (score >= 90 && score <= 100) {
        scoreFinal = 'A'
    } else if (score >= 80 && score <= 89) {
        scoreFinal = 'B'
    } else if (score >= 70 && score <= 79) {
        scoreFinal = 'C'
    } else if (score >= 60 && score <= 69) {
        scoreFinal = 'D'
    } else if (score >= 1 && score <= 59) {
        scoreFinal = 'F'
    }else{
        console.log('Nota inválida')
    }
    
    return scoreFinal
}

//Testando as condicionais dentro da Function
console.log(getScore(-1))
console.log(getScore(10))
console.log(getScore(44))
console.log(getScore(56))
console.log(getScore(75))
console.log(getScore(80))
console.log(getScore(-2))