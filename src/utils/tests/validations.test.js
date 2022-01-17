const validations = require('../validations')

describe('Testes unitários validations.js ', () => {
    it('Teste função entradaInteiro', () => {
        function entradaInteiro() {
            validations.entradaInteiro(1);
        }
        expect(entradaInteiro).not.toThrowError('Preencha');
    })

    it('Teste função entradaMaiorQueZero', () => {
        function entradaMaiorQueZero() {
            validations.entradaMaiorQueZero(0);
        }
        expect(entradaMaiorQueZero).not.toThrowError('caracteres');
    })
});