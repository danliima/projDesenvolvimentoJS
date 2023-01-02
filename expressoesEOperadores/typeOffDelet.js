/*
    Operadores unários
    typeof
    delete
*/

const person = {
    nome: 'Daniel',
    age: 24
}

//O delet irá procurar a propriedade dentro do nosso objeto e deletá-la, mas isso só será possível se a propriedade estiver dentro do objeto.
delete person.nome

console.log(person)