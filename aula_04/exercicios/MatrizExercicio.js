"use strict"

const leia = require("readline-sync");

let mat = [];
let vet = [];
let res = "";

for (let i = 0; i < 10; i++) {
    mat[i] = [];
    let soma = 0;

    for (let j = 0; j < 4; j++) {
        mat[i][j] = leia.questionFloat(`Digite a nota ${j + 1} do participante ${i + 1}: `);
        soma += mat[i][j];
    }

    vet[i] = soma / 4;
}

for (let i = 0; i < vet.length; i++) {
    res = `${res}${vet[i].toFixed(1)} | `;
}

console.log("===== Médias dos Participantes =====");
console.log(res);