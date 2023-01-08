//Estrutura de repetição
//for

//É possível encrementar a variável com o ++ e decrementar com o --.

//Exemplo1
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }


//Exemplo2 Usando condicionais dentro do for
//break - para a execução do loop
//continue - pula a execução do loop

for(let i = 10; i > 0; i--){
    if(i ===5)
        // break;
        continue;

    console.log(i)
}