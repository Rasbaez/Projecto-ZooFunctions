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

module.exports = { isManager, getRelatedEmployees };
