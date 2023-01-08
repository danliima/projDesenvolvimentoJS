//Estrutura de repetição
//for..in

//Ele cria um loop no objeto pegando as propriedades dele

let person = {
    nome: 'Daniel',
    age: 24,
    weight: 96
}

for(let property in person){
    console.log(property)
    //Pegando o dado dentro do objeto
    console.log(person[property])
}