const leia = require('readline-sync');


let nota1 = leia.questionFloat('Digite a Nota 1: ');
let nota2 = leia.questionFloat('Digite a Nota 2: ');
let nota3 = leia.questionFloat('Digite a Nota 3: ');
let nota4 = leia.questionFloat('Digite a Nota 4: ');

let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Média final: ${mediaFinal.toFixed(1)}`);