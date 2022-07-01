const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const list = {};
  species.forEach((elem) => {
    list[elem.name] = elem.residents.length;
  });

  if (animal === undefined) {
    return list;
  }

  const { specie, sex } = animal;

  const result = species.find((elem) => elem.name === specie);

  if (sex !== undefined) {
    return result.residents.filter((elem) => elem.sex === sex);
  }
  return result.residents.length;
}

// console.log(countAnimals({ specie: 'penguins' }));
console.log(species);

module.exports = countAnimals;
