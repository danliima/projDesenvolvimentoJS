/*
    *Buscando e encontrando Array 

    Baseado no Array de Livros por  categoria abaixo, faça os seguintes desafios:

        -Contar o número de categorias e o número de livros em cada categoria
        -Contar o número de autores
        -Mostrar livros do autor Augusto Cury
        -Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riquesa",
        books: [
            {
                tittle: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                tittle: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                tittle: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },

        ],
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                tittle: "Você é insubistituível",
                author: "Augusto Cury"
            },
            {
                tittle: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                tittle: "Os sete habitos das pessoas autamente eficazes",
                author: "Stephen R. Covey"
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories)

for(let category of booksByCategory){
    console.log('Total de livros da categoria: ',category.category)
    console.log(category.books.length)

}

function countAuthors (){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ",authors.length)
}

// function booksOfAugustoCury (){
//     let books = [];

//     for(let category of booksByCategory){
//         for(let book of category.books){
//             if(book.author === 'Augusto Cury'){
//                 books.push(book.tittle)
//             }
//         }
//     }

//     console.log("Livros do autor: ",books)
// }


function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.tittle)
            }
        }
    }

    console.log(`Livros do autor  ${author}: ${books.join(", ")} `)
}

booksOfAuthor('Stephen R. Covey')
