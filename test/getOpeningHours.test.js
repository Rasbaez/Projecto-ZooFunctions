const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso os parâmetros da função sejam, "Monday" e "09:00-AM", a a função deverá retornar "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Caso os parâmetros da função sejam, "Tuesday" e "09:00-AM", a a função deverá retornar "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Caso os parâmetros da função sejam, "Wednesday" e "09:00-PM", a a função deverá retornar "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  it('Caso os parâmetros da função sejam, "Thu" e "09:00-AM",a função deverá lançar a mensagem de erro "The day must be valid. Example: Monday"', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow('The day must be valid. Example: Monday');
  });

  it('Caso os parâmetros da função sejam, "Friday" e "09:00-ZM",a função deverá lançar a mensagem de erro "The day must be valid. Example: Monday"', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Caso os parâmetros da função sejam, "Saturday" e "C9:00-AM",a função deverá lançar a mensagem de erro "The hour should represent a number"', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow('The hour should represent a number');
  });

  it('Caso os parâmetros da função sejam, "Sunday" e "09:c0-AM",a função deverá lançar a mensagem de erro "The minutes should represent a number"', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow('The minutes should represent a number');
  });

  it('Caso os parâmetros da função sejam, "Monday" e "13:00-AM",a função deverá lançar a mensagem de erro "The hour must be between 0 and 12"', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });

  it('Caso os parâmetros da função sejam, "Tuesday" e "09:60-AM",a função deverá lançar a mensagem de erro "The hour must be between 0 and 12"', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
});
