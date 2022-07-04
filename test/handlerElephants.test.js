const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Caso a função seja passada sem parâmetros, a função deverá retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Caso o parâmetro seja "count",a função deverá retornar 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Caso o parâmetro seja "names", deve retornar um array de nomes que possui o nome "Jefferson"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Caso o parâmetro seja "averageAge", a função deverá retornar 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Caso o parâmetro seja "location", a função deverá retornar NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Caso o parâmetro "popularity", a função deverá retornar um número igual ou maior a 5;', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('Caso o parâmetro seja "availability", a função deverá retornar um array de dias da semana que não contém "Monday"', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });

  it('Passando por argumento um objeto vazio (`{}`), a função deverá retornar a string "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Caso os parâmetros não sejam uma funcionalidade, a função deverá retornar "null"', () => {
    expect(handlerElephants('lastName')).toBe(null);
  });
});
