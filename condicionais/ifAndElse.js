// if e else

//Modelo simples de condicional
// let temperatura = 36

// if (temperatura >= 37){
//     console.log('Paciente com febre alta')
// }else{
//     console.log('Paciente está saudável')
// }

//Usando com múltiplas condicionais

// let temperatura = 37.6

// if (temperatura >= 37.5){
//     console.log('Paciente com febre alta')
// }else if(temperatura <37.5 && temperatura >= 37){
//     console.log('Febre moderada')
// }else{
//     console.log('Paciente saudável')
// }

//Condicionais armazenadas em  variáveis

let temperatura = 38
let highTemperature = temperatura >= 37.5
let mediumTemperature = temperatura <37.5 && temperatura >= 37


if (highTemperature){
    console.log('Paciente com febre alta')
}else if(mediumTemperature){
    console.log('Febre moderada')
}else{
    console.log('Paciente saudável')
}