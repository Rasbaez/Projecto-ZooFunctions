const data = require('../data/zoo_data');

const { species, employees } = data;

const findAnimals = (array) =>
  array.map((elem) => species.find((animal) => animal.id === elem).name);

const findLocations = (arr) =>
  findAnimals(arr).map(
    (elem) => species.find((animal) => animal.name === elem).location,
  );

function allEmployees() {
  return employees.map((employee) => ({
    id: employee.id,
    fullname: `${employee.firstName} ${employee.lastName}`,
    species: findAnimals(employee.responsibleFor),
    locations: findLocations(employee.responsibleFor),
  }));
}

function getEmployeesCoverage(obj) {
  const parameters = Object.values(obj).join('');
  const findEmployees = employees.find((employee) => (employee.id === parameters
            || employee.name === parameters || employee.lastName === parameters));
  const { id, firstName, lastName, responsibleFor } = findEmployees;
  const resultObj = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: findAnimals(responsibleFor),
    locations: findLocations(responsibleFor),
  };
  if (findEmployees === undefined) throw new Error('Informações inválidas');
  if (obj === undefined) {
    return allEmployees();
  } return resultObj;
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));

// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
