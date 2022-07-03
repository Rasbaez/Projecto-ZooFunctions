const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const animalsId = employees.find((employee) => employee.id === id).responsibleFor;
  const firstAnimal = species.find((specie) => specie.id === animalsId[0]);
  const oldestAnimal = firstAnimal.residents.reduce((prev, curr) => {
    if (prev.age > curr.age) {
      return prev;
    }
    return curr;
  });
  const { name, sex, age } = oldestAnimal;
  const result = [name, sex, age];

  return result;
}

// console.log(getOldestFromFirstSpecies("56d43ba3-a5a7-40f6-8dd7-cbb05082383f"));

module.exports = getOldestFromFirstSpecies;
