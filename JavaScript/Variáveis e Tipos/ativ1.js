function verificarPolindromo(string) {
    if(!string) return "string inexistente";

return string.split("").reverse().join("") === string;

}

console.log(verificarPolindromo('ama'));