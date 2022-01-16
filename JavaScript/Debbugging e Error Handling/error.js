/*function verificaPalindromo(string) {
    if (!string) throw "String inválida"; 
// o throw vai printar a mensagem como um erro, com um x vermelho do lado, formato de erro
    return string === string.split(' ').reverse().join(' ');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e) //ou throw e; - erro 
    }
} // com o try/catch se pode manipular a mensagem de erro, colocando ela dentro de um formato de erro, ou só printando um log, mas que não fica em formato de string, como faxiamos com o return. 

tryCatchExemplo(" ");

//finally
function verificaPalindromo(string) {
    if (!string) throw "String inválida"; 
    return string === string.split(' ').reverse().join(' ');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        throw e; 
    }
    finally { //uma instrução que vai ser chamada independente de existir um erro ou não, executa depois das verificações, independente do resultado.
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo(" ");*/