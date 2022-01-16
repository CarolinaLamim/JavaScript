// tipos primitivos

// boolean
var vOUF = false; 
console.log(typeof (vOUF));

//number 
var numeroQualquer = 1;
console.log(numeroQualquer)
console.log(typeof (numeroQualquer));

//string 
var nome = 'diego';
console.log(typeof (nome));

//como declarar

var variavel; //retorna undefined 
variavel = 'variável'; 

// let escopo local
let variavel2 = 'carol';
console.log(variavel2);

//const não pode ser alterada - precisa de valor inicial
const constante = 'ana';

// escopo local - dentro de algum bloco
// escopo global - visto por todo o código

//não iniciar variavel com numeros
//não utilizar espaço, usar camelCase
//não usar palavras reservadas como function

/* Atribuição 
var nome = "meu nome";

Comparação 
"0" == 0;
retorna true.

Comparação Identica
"0" === 0;
retorna false porque "0" é string e 0 é número. 

Operadores aritméticos */

// adição
var adicao = 1 + 1;
console.log(adicao)

//subtração 
var subtracao = 1-1

//multiplicação
var multiplicacao = 2 * 3; 

// divisão real 
var divisaoReal = 6 / 3;

//divisão inteira
var divisaoInteira = 5 % 2;

//potenciação
var potenciacao = 2 ** 10;

/* Operadores relacionais
<=
>=
>
<
 Operadores lógicos
 && - ambos verdadeiros
 || - um ou outro é verdadeiro
 ! - não é verdadeiro - inverte o valor.
*/