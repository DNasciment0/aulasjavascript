const leia = require('readline-sync');

let numero1 = leia.questionFloat('Digite o numero 1: ');
let numero2 = leia.questionFloat('Digite o numero 2: ');
let numero3 = leia.questionFloat('Digite o numero 3: ');
let numero4 = leia.questionFloat('Digite o numero 4: ');

let diferenca = (numero1 * numero2) - (numero3 * numero4);

console.log(`Diferença: ${diferenca.toFixed(1)}`);