const leia = require("readline-sync");

console.log("=== Calculadora de Reajuste Salarial ===");
console.log("1 - Gerente ");
console.log("2 - Vendedor ");
console.log("3 - Supervisor ");
console.log("4 - Motorista ");
console.log("5 - Estoquista ");
console.log("6 - Técnico de TI ");
console.log("========================================");

const nome = leia.question("Nome do Colaborador: ");
const codigo = leia.questionInt("Selecione o Cargo (1 a 6): ");

const salario = leia.questionFloat("Salario: ");

let cargo;
let reajuste;

switch (codigo) {
    case 1:
        cargo = "Gerente";
        reajuste = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        reajuste = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        reajuste = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        reajuste = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        reajuste = 0.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        reajuste = 0.08;
        break;
    default:
        console.log("Código de Cargo Inválido, por favor selecione um cargo de 1 a 6 !!!");
        break;

}

const novoSalario = salario + (reajuste * salario);

console.log()
console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log("Salário:",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(novoSalario))