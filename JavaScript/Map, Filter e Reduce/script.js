// Ativ 1

const maca = {
    value: 2 ,
}

const laranja = {
    value : 3 ,
}

function mapComThis(array, thisArg) {
    return base.map(function(item) {
       return item * this.value;
    },thisArg);
}

const base = [1,2];
console.log('this -> maçã', mapComThis(base,maca));
console.log('this -> laranja', mapComThis(base,laranja));


function mapSemThis(array) {
    return array.map(function(item) {
        return item * 2; })
}

const array = [1,2,3,4];
console.log(mapSemThis(array));

