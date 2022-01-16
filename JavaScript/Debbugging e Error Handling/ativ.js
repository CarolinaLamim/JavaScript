function retornaArray(array,number) {
  try {
       if (!array && !number) throw new ReferenceError('Envie os Parâmetros!');
    if (typeof array !== 'object') throw new TypeError('Envie um elemento do tipo Array!');
    if (typeof number !== 'number') throw new TypeError('Entre com um número!');
    if (array.length !== number) throw new RangeError('Tamanho do array inválido!');

    return array;
  } catch (e) {
      if (e instanceof RangeError) {
          console.log('RangeError!');
          console.log(e.message);
      } else  if (e instanceof ReferenceError) {
        console.log('ReferenceError!');
        console.log(e.message);
    } else  if (e instanceof TypeError) {
        console.log('TypeError!');
        console.log(e.message); 
    } else {
        console.log('Tipo de erro não esperado: ' + e);
        console.log(e.message);
    } 
  }
}


let array = [1,2,3];
console.log(retornaArray([1,2,3,4,5], 5));