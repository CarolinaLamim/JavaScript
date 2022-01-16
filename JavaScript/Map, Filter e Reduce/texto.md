# Map
- cria um novo array
- não modifica o array original 
- realiza as operações em ordem

## Sintaxe

*array.map(callback , thisArg)*
callback é a função que será executada
*callback (item, index, array)*
thisArg é opcional

### Map vs forEach
// Usando map
const array = [1,2,3,4,5];
array.map((item) => item * 2); // retorno : [2,4,6,8,10];

//Usando forEach

const array = [1,2,3,4,5];

array.forEach((item) => item * 2); // retorno : undefined - para utilizar precisa colocar a função dentro de uma constante

# Filter

Como se colocasse todo o array dentro de um filtro. 
- cria um novo array 
- retorna uma nova lista apenas com os itens que passaram pelo filtro

## Sintaxe
array.filter(callback, thisArg)

const frutas = ['maçã fuji','maçã verde', 'laranja', 'abacaxi];

frutas.filter((fruta) => fruta.includes('maçã'))
// retorno: ['maçã fuji','maçã verde'];
// fruta é o item, o item pode ter qualquer nome.

# Reduce 
- Executa uma função em todos os elementos do array e retorna um valor único. Que pode ser um array, string ou número. 

## Sintaxe
*array.reduce(callbackFn, initialValue)*

callbackFn - função a ser executada a partir do acumulador
initialValue - valor sobre qual o retorno final irá atuar (opcional)

const callbackFn = function(accumulador, currentValue, index, array) {
    //do something
}
array.reduce(callbackFn, initialValue)
