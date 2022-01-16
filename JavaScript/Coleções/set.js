

function valoresUnicos(array) {
    let unicos = new Set(array); // já corta os iguais
    return [...unicos]; // transforma o set em array
}

const array = [30,30,40,5,223,2049,3034,5];
console.log(valoresUnicos(array))
