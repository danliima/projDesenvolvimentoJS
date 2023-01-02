//Manipulando Arrays

let techs = ['html', 'css', 'js']

//Adicionando um item no fim
techs.push('nodejs')

//Adicionando um item no começo
techs.unshift('sql')

//remover do fim
// techs.pop()

//remover do começo
// techs.shift()

//pegar somentente alguns elementos do Arrays (no segundo argumento a contagem é 1 2 e 3....)
// console.log(techs.slice(1,1))

//remover 1 ou mais itens em qualquer posição doo Array
// 

//encontrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)