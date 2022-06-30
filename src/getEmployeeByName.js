const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  const result = employees.find((employeer) => employeeName === employeer.firstName
                                              || employeeName === employeer.lastName);
  return employeeName === undefined ? {} : result;
}

module.exports = getEmployeeByName;
