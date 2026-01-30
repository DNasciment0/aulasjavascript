"use strict"
const leia = require("readline-sync");

let continua = 'S';

while (continua === 'S') {

    console.log("\n============================");
    console.log("\nCALCULADORA COM SWITCH CASE");
    console.log("\n============================");
    console.log("\(+) - soma");
    console.log("\(-) - Subtracao");
    console.log("\(*) - Multiplicacao");
    console.log("\(/) - Divisão");
    console.log("\n============================");
    console.log("\n                            ");


    let numero1 = leia.questionFloat("Digite o primeiro numero: ",
        { limitMessage: 'Digite um numero float' }
    );
    let numero2 = leia.questionFloat("Digite o segundo numero: ",
        { limitMessage: 'Digite um numero float' }
    );
    let operacao = leia.keyIn("Digite o numero da operacao: ",
        { limitMessage: 'Digite um numero float' }
    );

    switch (operacao) {
        case "+":
            console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
            break;
        case "-":
            console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
            break;
        case "*":
            console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
            break;
        case "/":
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
            break;

        default:
            console.log("Operacao invalida");
            break;
    }

    continua = leia.keyIn("Deseja continuar (S/N)").toUpperCase();
}