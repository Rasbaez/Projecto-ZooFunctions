const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  const result = employees.find((employeer) => employeer.firstName === employeeName
                                              || employeer.lastName === employeeName);
  return employeeName === undefined ? {} : result;
}

module.exports = getEmployeeByName;
