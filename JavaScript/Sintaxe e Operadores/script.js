function operadores(a,b){
    let soma = a + b; 
    let igualdade;
    let tam10;
    let tam20;

    if(a == b){
        igualdade = 'são iguais';
    } else {
        igualdade = 'são diferentes';
    };

    soma < 10 ? tam10 = 'menor que 10' : tam10 = 'maior que 10';

    soma < 20 ? tam20 = 'menor que 20' : tam20 = 'maior que 20';
    
    console.log(`Os números ${a} e ${b} ${igualdade}.Sua soma é ${soma}, que é ${tam10} e ${tam20}.`);

}

operadores(10,2)
