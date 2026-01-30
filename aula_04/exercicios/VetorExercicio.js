"use strict"

const leia = require("readline-sync");

let vet = [];
let soma = 0;
let imp = "";
let par = "";

for (let i = 0; i < 10; i++) {
    vet[i] = leia.questionInt(`Digite o ${i + 1}º número: `);
}

for (let i = 0; i < vet.length; i++) {
    if (i % 2 !== 0) {
        imp = `${imp}${vet[i]} `;
    }
}

for (let i = 0; i < vet.length; i++) {
    if (vet[i] % 2 === 0) {
        par = `${par}${vet[i]} `;
    }
}

for (let i = 0; i < vet.length; i++) {
    soma = soma + vet[i];
}

let media = soma / vet.length;

console.log("\nElementos nos índices ímpares:");
console.log(imp);

console.log("\nElementos pares:");
console.log(par);

console.log(`\nSoma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);