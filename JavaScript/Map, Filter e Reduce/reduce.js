/*function somaNum(array) {
    return array.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current; 
    },0);
}

const array = [1,2];
console.log(somaNum(array));*/

// Lista de preços
function saldo(array) {
    return array.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev - current; 
    },saldoInicial);
}
const saldoInicial = 500;
const lista = [25,100,200];
console.log(saldo(lista));