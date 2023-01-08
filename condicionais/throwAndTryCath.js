//throw (siguinifica disparar)

function sayMyName(name = ''){
    if (name === ''){
        throw new Error("Nome é necessário")
    }

    console.log(name)
}




//try (tentar).. cath (pegar)
try{
    sayMyName('Daniel')
} catch(e){
    console.log('Após o try/catch')
}

console.log('Após a função de erro')