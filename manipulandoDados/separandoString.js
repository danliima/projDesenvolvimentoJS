// Manipulando Strings e Array

//Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _

let phrase = "Eu amo programar em várias linguagens"
let myArray =  phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")

//Testando deixando as letras minúsculas
console.log(phraseWithUnderscore.toLowerCase())