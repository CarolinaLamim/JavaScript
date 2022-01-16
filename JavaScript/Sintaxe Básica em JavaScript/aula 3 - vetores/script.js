
// como declarar
let array = ['string', 1, true];
console.log(array);

//funciona como uma caixa para guardar vários elementos dentro.

// forEach
array.forEach(function(item, index){
    console.log(item, index)
});

array.push('novo item');
console.log(array);

array.pop(); 
console.log(array);

array.shift(); // remove do inicio
console.log(array);

array.unshift('novo item no inicio');
console.log(array);

console.log(array.indexOf(true)); // saber o indice de um elemento.

array.splice(0,3);
console.log(array); // apaga de um indice a outro

let novoArray = array.slice(0,3);
console.log(novoArray);

//objetos
// é declarado entre {}
 
let object = { string: 'string', number: 1, Boolean : true, array: ['array'], objectInterno :{ objectInteno: 'objeto Interno'}}
console.log(object.Boolean); // com o '.' podemos acessar as propriedades do objeto.

//desistruturação 
var string = object.string; 
console.log(string);

var { string, boolean, objectInteno} = object;
console.log(string, boolean, objectInteno);
