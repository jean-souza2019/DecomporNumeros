module.exports = {
    entradaInteiro: (valor) => {
        if (valor <= 0 || Number.isNaN(valor)) {
            return('Preencha somente números inteiros!');
        }
    }
};