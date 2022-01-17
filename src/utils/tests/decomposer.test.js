const decomposer = require('../decomposer')

describe('Testes unitários decomposer.js ', () => {
  it('Teste função divisores', () => {
    const esperado = [1, 3, 5, 9, 15, 45]
    const calculo = new decomposer(45);
    expect(calculo.divisores().divisores).toEqual(expect.arrayContaining(esperado));
  })
});