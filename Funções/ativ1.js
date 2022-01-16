function alunos(array) {
    let aprovados = [];

    for(let i = 0; i <= array.length ; i++) {
         if(array[i] >= 6) {
             aprovados.push(array[i]);
         }
    } console.log(aprovados)
}

let notas = [10, 3 , 7, 9];
alunos(notas)
