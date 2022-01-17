const validacoes = require('./validations');

class Decomposer {
    constructor(entrada) {
        this.valor = entrada;
        this.valida();
    }

    valida() {
        validacoes.entradaInteiro(this.valor);
    }

    divisorePrimo(value) {
        if (value == 1) {
            return true;
        }
        for (let i = 2; i < value; i++)
            if (value % i === 0) {
                return false;
            }
        return value > 1;
    }

    divisores() {
        let divisores = [];
        let primos = [];

        for (let i = 0; i <= this.valor; i++) {
            if ((this.valor % i) === 0) {
                divisores.push(i);

                if (this.divisorePrimo(i)) {
                    primos.push(i);
                }
            }
        }

        return { divisores, primos };
    }
}

module.exports = Decomposer;