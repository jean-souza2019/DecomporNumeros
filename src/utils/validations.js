const { InvalidArgumentError } = require('./errors');


module.exports = {
    entradaInteiro: (valor) => {
        valor = parseInt(valor);
        if (typeof valor != 'number') {
            throw new InvalidArgumentError(`Preencha somente números inteiros!`);
        } else {
            if (Number.isInteger(valor) !== true) {
                throw new InvalidArgumentError(`Preencha somente números inteiros!`);
            }
        }
    },


    entradaMaiorQueZero: (valor) => {
        var minimo = 0;
        if (valor.length <= minimo)
            throw new InvalidArgumentError(
                `O valor precisa ser maior que ${minimo} caracteres!`
            );
    }
};
