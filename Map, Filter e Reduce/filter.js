function filterPares(array) {
    return array.filter(function(num) {
        return num % 2 === 0;
    });
}

const array = [1,2,3,4,5,6,7,8,9];
console.log('Números Pares: ',filterPares(array));