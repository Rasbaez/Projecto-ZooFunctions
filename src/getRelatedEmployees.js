const data = require('../data/zoo_data');

const employees = [...data.employees];

function isManager(id) {
  // seu código aqui
  const managerOrNot = employees.some((employee) =>
    employee.managers.includes(id));
  return managerOrNot;
}

function getRelatedEmployees(managerId) {
  const result = [];
  employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      return result.push(`${employee.firstName} ${employee.lastName}`);
    }
  });

  if (isManager(managerId) === true) {
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// result.push(`${employee.firstName} ${employee.lastName}`) : throw new Error('O id inserido não é de uma pessoa colaboradora gerente
// console.log(getRelatedEmployees("9e7d4524-363c-416a-8759-8aa7e50c0992"));

module.exports = { isManager, getRelatedEmployees };
