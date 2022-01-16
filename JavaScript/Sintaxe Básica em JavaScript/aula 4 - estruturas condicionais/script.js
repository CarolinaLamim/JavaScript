var jogador1 = 0;
var jogador2 = 2;
var placar;

/*if(jogador1 > 0) {
    console.log("Jogador 1 marcou ponto!")
} else {
    console.log('Ninguém marcou ponto!')
}*/

/*if(jogador1 > 0) {
    console.log("Jogador 1 marcou ponto!")
} else if (jogador2 >0) {
    console.log("Jogador 2 marcou ponto!")
} else {
    console.log('Ninguém marcou ponto!')
}*/

// ninho de if
/*if(jogador1 != -1) {
if(jogador1 > 0) {
    console.log("Jogador 1 marcou ponto!")
} else if (jogador2 >0) {
    console.log("Jogador 2 marcou ponto!")
} else {
    console.log('Ninguém marcou ponto!')
}
}*/

// if ternário
/*jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');
if(jogador1 > 0) {
    console.log("Jogador 1 marcou ponto!")
} else if (jogador2 >0) {
    console.log("Jogador 2 marcou ponto!")
} else {
    console.log('Ninguém marcou ponto!')
}*/

//verificações
/* jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');

if(jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 marcou ponto!")
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log("Jogador 2 marcou ponto!")
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguém marcou ponto!')
}

//switch/case

switch(placar){
    case placar = jogador1 > jogador2:
    console.log('jogador 1 ganhou');
      break;
    case placar = jogador2 > jogador1:
    console.log('jogador 2 ganhou');
      break;
    default:
    console.log('Ninguém ganhou!');
}*/

let array = ['valor1', 'valor2', 'valor3', 'valor4','vaalor5',];
let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
};

// for - executa uma instrução até que ela seja falsa
/*for(let indice = 0; indice < array.length; indice++) {
console.log(indice);
}*/

// for/in executa repetição a partir de uma propriedade
//array
/*for (let i in array) {
   console.log(i);
}

//object
for (i in object) {
    console.log(i);
}*/

// for/of - repetição a partir de um valor
//array
/*for(i of array) {
    console.log(i);
}
//object - precisa passar a propriedade dentro da condição - mas imprime uma letra em cada linha
for (i of object.propriedade1) {
    console.log(i);
}*/

//while 
/*var a = 0;
while (a<10) {
   a++;
   console.log(a);
}*/

// do/while - executa até que determinada condição seja falsa.
 var a = 0;
do {
    a++;
    console.log(a);
} while (a < 10);
