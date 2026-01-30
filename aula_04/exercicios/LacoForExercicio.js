"use strict"

const leia = require("readline-sync");

console.log("=== Laco de Repetição FOR ===");

let num1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
let num2 = leia.questionInt("Digite o ultimo numero do intervalo: ");

if (num1 >= num2) {
    console.log("Intervalo inválido!");
} else {
    console.log(`No Intervalo entre ${num1} e ${num2}:`);

    for (let i = num1; i <= num2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
        }
    }
}