const leia = require('readline-sync');


let salario = leia.questionFloat('Digite o Salario: ');
let abono = leia.questionFloat('Digite o Abono: ');

let novoSalario = Number(salario) + Number(abono);

//console.log(`Novo Salário: ${novoSalario.toFixed(2)}`);

console.log("Novo Salário: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(novoSalario));

