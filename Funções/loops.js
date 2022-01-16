// If/Else
function numeroPositivo(num) {
    const ehNegativo = num < 0; 

    if(ehNegativo) {
        return false;
    }
    return true;
}

//Switch
function getAnimal(id) {
    switch(id){
        case 1:
            return 'cão';
        case 2:
            return 'gato';
        default: 
            return 'peixe';
    }
}

getAnimal(1); //cão 
getAnimal(4) //peixe
getAnimal("1") //peixe
// ele faz a comparação de valor e tipo

// for - loop dentro de elementos iteráveis

function multiplicaPorDois(arr) {
    let multiplicados = [];

for(let i=0; i < array.length; i++) {
    multiplicados.push(arr[i]*2)
}
return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros);
// [4, 66, 912, 712, 80]

// for...in - propriedades enumeráveis
// propriedades existentes
function forInExemplo(obj) {
    for(prop in obj){
        console.log(prop);
    }
}

// valores das propriedades
function forInExemplo(obj) {
    for(prop in obj){
        console.log(obj[prop]);
    }
}

// for...of
function logLetras(palavra) {
    for(letra of palavra){ //para cada letra de palavra - faça isso
        console.log(letra);
    }
}

const palavra = "abacaxi";
logLetras(palavra)

//while - executa até que a condição seja falsa
function exemploWhile() {
    let num = 0; 

    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile()

//do...while
function exemploDoWhile() {
    let num = 0; 

    do {
        console.log(num);
        num++;
    }
    while(num <= 5)
}

exemploDoWhile()



