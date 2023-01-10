/* CelSius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

//Exercício extra usar expressão regular no programa


//transform('50F)
function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C') 
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    //fluxo ideal, F --> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    //fluxo alternativo

    
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsios => celsios * 9/5 + 32
        degreeSing = 'F'

    }

    return formula(updateDegree) + degreeSing
}

try{
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50D')
} catch(error){
    console.log(error.message)
}

