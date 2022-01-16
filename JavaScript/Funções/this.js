//This
// se refere ao objeto pai do objeto dentro de um método
// dentro de um evento é se refere ao elemento que recebeu o evento
// navegador e dentro de função se refere ao objeto global Window.

//Manipulando o valor de this
//Call
const pessoa = {
    nome: 'Miguel',
}

const animal = {
    nome: "Murphy",
}

function getSomething() {
    console.log(this.nome);
}

getSomething.call(animal);
getSomething.call(pessoa);

//Apply
const pessoa = {
    nome: 'Miguel',
}

const animal = {
    nome: "Godi",
}

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(animal);
getSomething.apply(pessoa);
// os argumentos tem que ser enviados dentro de array []. 


//Bind - clona a estrutura da função, aplica o valor do objeto passado como parâmetro

const retornaNomes = function(){
    return this.nome;
}

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno() //Bruno