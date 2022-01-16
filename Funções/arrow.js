const helloWorld = () => "Hello World"; //não precisa escrever o return se só tiver uma linha

const helloWorld = () => {
    return "Hello World";
}

const soma = (a,b) => a + b;
//ela não faz hoisting 

//restrições
//this sempre vai ser global
// não existe o objeto "arguments"
// o construtor(ex: new Object()) não pode ser utilizado