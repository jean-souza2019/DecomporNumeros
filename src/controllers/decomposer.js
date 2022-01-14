const Decomposer = require('../utils/decomposer');

module.exports = {
    calcula: (valor) => {
        try {
            const calculo = new Decomposer(valor);
            var resposta = new Array();
            resposta = calculo.divisores();
            
            return resposta;
        } catch (error) {
            console.log(error)
        }
    }
};