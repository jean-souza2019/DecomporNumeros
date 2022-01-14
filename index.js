const controllerDecomposer = require('./src/controllers/decomposer');
const readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite um número: \n>", function (entrada) {
    const teste = controllerDecomposer.calcula(entrada);


    console.log("\nNúmero de Entrada: " + entrada);
    console.log("\nNúmeros divisores: " + teste.divisores);
    console.log("\nDivisores Primos: " + teste.primos);
    leitor.close();
});