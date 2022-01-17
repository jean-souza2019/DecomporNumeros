const Decomposer = require('./src/utils/decomposer');
const Readline = require('readline');


var leitor = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


leitor.question("Digite um número: \n>", function (entrada) {
    const calculo = new Decomposer(entrada);
    var resposta = new Array();
    resposta = calculo.divisores();

    console.log("\nNúmero de Entrada: " + entrada);
    console.log("\nNúmeros divisores: " + resposta.divisores);
    console.log("\nDivisores Primos: " + resposta.primos);
    leitor.close();
});