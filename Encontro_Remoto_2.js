// Considere a quantidade de alunos presentes na sala, percorra do até o número de alunos e retornar os seguintes resultados:

// Se o númeor for par, escreva 'par' r o número correspondente.
// Se o número for impar, escreva 'impar' e o número correspondente.
// Se o número for zero, escreva 'zero' e o número correspondente.

let alunos = 16;

for(let i = 1; i <= alunos; i++) {

    if( i == 0 ) {
        console.log(`Zero: ${i}`);
    } else if( i % 2 == 0 ){//par
        console.log(`Par: ${i}`);
    } else{
        console.log(`Ímpar: ${i}`);
}

}