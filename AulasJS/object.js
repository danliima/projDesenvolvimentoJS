/*
-Object
   *Objeto
   *Propriedades / Atributos
   *Funcionalidades / Métodos

   {propriedade: "valor"}
*/

// console.log({
//     name: "Daniel",
//     idade: 24,
//     andar: function(){
//         console.log('andar')
//     }
// })


const person = {
    name: 'Daniel',
    age: 24,
    weight: 88.6,
    isAdmin: true
}
//Utilizando os dados do meu objeto
console.log(person)

//Usando a interpolação no objeto
console.log(`Cliente é o ${person.name}, ele tem ${person.age} anos`)