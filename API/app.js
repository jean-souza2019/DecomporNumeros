const Decomposer = require('./src/utils/decomposer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/decomposer', (req, res) => {
    const entrada = req.body.number;
    const decomposerDivisores = new Decomposer(entrada);
    const { divisores, primos } = decomposerDivisores.divisores();

    let mensagem = `\nNúmero de Entrada: ${entrada}\n
     Números divisores: ` + divisores + `\n
     Divisores Primos: ` + primos;

    res.status(200).send(mensagem);
});

module.exports = app;