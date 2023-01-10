/* ##Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo Array.
    *receitas: []
    *despesas: []

Agora, crie uma função que irá calcular o total de receita e irá morstrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

let familyExpenses = {
    revenues: [2500, 1000, 2500],
    expenses: [2500, 1000, 800, 700, 30]
}

//Criando a função que irá somar as receitas e despesas

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }


    return total
}

function calculateBalance(){
    const calculateRevenues = sum(familyExpenses.revenues)
    const calculateExpenses = sum(familyExpenses.expenses)

    const total = calculateRevenues - calculateExpenses;

    const positiveBalance = total >= 0;

    let balanceText = 'Negativo' 

    if(positiveBalance){
        balanceText = 'Positivo'
    }

    console.log(`Seu saldo é ${balanceText}: ${total} R$`)
}

calculateBalance()