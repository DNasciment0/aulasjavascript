const leia = require("readline-sync");

console.log("Par/Impar ::::: Posivito/Negativo");

const numero = leia.questionInt("Digite um numero: ");

if (numero % 2 === 0) {
    if (numero >= 0) {
        console.log(`O Número ${numero} é par e positivo!`);
    } else {
        console.log(`O Número ${numero} é par e negativo!`);
    }

} else {
    if (numero >= 0) {
        console.log(`O Número ${numero} é ímpar e positivo!`);
    } else {
        console.log(`O Número ${numero} é ímpar e negativo!`);
    }
}