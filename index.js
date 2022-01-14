var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite um número: \n>", function (answer) {
    var resp = answer;
    console.log("\nNúmero de Entrada: '" + resp + "'");
    console.log("\nNúmeros divisores: '" + resp + "'");
    console.log("\nDivisores Primos: '" + resp + "'");
    leitor.close();
});