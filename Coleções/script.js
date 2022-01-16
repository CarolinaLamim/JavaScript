// Map
/* coleção de arrays no formato [chave,valor];
*/

const myMap = new Map()

myMap.set('apple','fruit');
// Map(1) {"apple" => "fruit"}
myMap.get('apple'); 
// "fruit"
myMap.delete("apple"); //usar a chave
//true
myMap.get("apple")
// undefined

//pode ter chave de qualquer tipo, possui a propriedade length, utilizado quando o valor das chaves é desconhecido. Os valores do Map tem o mesmo tipo. 

//Set

/* Estruturas que armazenam apenas valores únicos, diferente do array que pode ter valores repetidos*/

const mySet = new Set();

mySet.add(1);

mySet.has(1);
//TRUE

mySet.delete(5);

/*Set vs Arrays
o numero de registros é consultado pela propriedade size, e não possui tantos métodos como o array */