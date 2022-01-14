const divisoresss = require('../decomposer')

const calculo = new divisoresss(45);

test('contem valor 5', () => {
  expect(calculo.divisores().divisores).toContain('5')
})