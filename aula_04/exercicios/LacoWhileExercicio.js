"use strict"

const leia = require("readline-sync");

let backend = 0;
let mulheresFrontend = 0;
let homensMobile40 = 0;
let fullStack30 = 0;
let totalPessoas = 0;
let somaIdade = 0;
let mediaIdade = 0;
let continua = "S";

while (continua === "S") {

    let idade = leia.questionInt("Digite a Idade: ");

    console.log("===== Identidade de Gênero =====");
    console.log("1 - Mulher Cis");
    console.log("2 - Homem Cis");
    console.log("3 - Não Binario");
    console.log("4 - Mulher Trans");
    console.log("5 - Homem Trans");
    console.log("6 - Outros");

    let genero = leia.questionInt("Digite a Identidade de Genero: ");

    console.log("===== Pessoa Desenvolvedora =====");
    console.log("1 - Backend");
    console.log("2 - Frontend");
    console.log("3 - Mobile");
    console.log("4 - FullStack");

    let tipoDev = leia.questionInt("Digite a Pessoa Desenvolvedora: ");

    totalPessoas++;
    somaIdade = somaIdade + idade;

    if (tipoDev === 1) {
        backend++;
    }

    if ((genero === 1 || genero === 4) && tipoDev === 2) {
        mulheresFrontend++;
    }

    if ((genero === 2 || genero === 5) && tipoDev === 3 && idade > 40) {
        homensMobile40++;
    }

    if (genero === 3 && tipoDev === 4 && idade < 30) {
        fullStack30++;
    }

    continua = leia.question("Deseja continuar (S/N): ").toUpperCase();
}

mediaIdade = somaIdade / totalPessoas;

console.log(`Total de pessoas desenvolvedoras Backend: ${backend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresFrontend}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensMobile40}`);
console.log(`Total de Pessoas Não Binarias desenvolvedoras FullStack menores de 30 anos: ${fullStack30}`);
console.log(`O número total de pessoas que responderam a pesquisa: ${totalPessoas}`);
console.log(`A média de idade das pessoas que responderam a pesquisa: ${mediaIdade.toFixed(2)}`);