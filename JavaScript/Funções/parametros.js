// Objeto 'arguments'

function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    } // no caso de não saber a quantidade de argumentos da arry
    return max;
}

function showArgs() {
    return arguments; // para visualizar todos os argumentos da array
}

// Array 
// Spread - colocar '...' na frente da variável para enviar o array como elementos independentes

function sum(x,y,z) {
    return x + y + z;
}

const numbers = [1,2,3];
console.log(sum(...numbers));

//Rest - combina os argumentos em array
function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho() //0
confereTamanho(1,2) //2
confereTamanho(3,4,5) //3

// Object Destructuring - filtrar apenas os dados que serão usados - procura uma propriedade dentro de um objeto.

const user = {
    id: 42,
}

function userID({id}) {
    return id;
}

userID(user) //42
