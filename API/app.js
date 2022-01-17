const Decomposer = require('./src/utils/decomposer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/decomposer', (req, res) => {
    const entrada = req.body.number;
    const decomposerDivisores = new Decomposer(entrada);
    const { divisores, primos } = decomposerDivisores.divisores();
    if (divisores.length && primos.length) {
        let mensagem = {
            "numeroEntrada": entrada,
            "numerosDivisores": divisores,
            "divisoresPrimos": primos
        };

        res.status(200).send(mensagem);
    } else {
        let mensagem = {
            "Erro": "Preencha somente números inteiros!"
        };
        res.status(401).send(mensagem);
    }
});

module.exports = app;