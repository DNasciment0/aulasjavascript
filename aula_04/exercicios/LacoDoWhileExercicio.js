"use strict"

const leia = require("readline-sync");

let num;
let soma = 0;
let cont = 0;
let media = 0;

console.log("===== Média de Múltiplos de 3 =====");

do {
    num = leia.questionInt("Digite um número: ");

    if (num !== 0 && num % 3 === 0) {
        soma = soma + num;
        cont++;
    }

} while (num !== 0);

if (cont > 0) {
    media = soma / cont;
    console.log(`A média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);
} else {
    console.log("Não foram digitados números múltiplos de 3.");
}