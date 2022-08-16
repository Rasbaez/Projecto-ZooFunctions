const data = require('../data/zoo_data');

const species = [...data.species];

function getAnimalsOlderThan(animal, age) {
  // seu código aqui

  const result = species.some((especie) => {
    const { name, residents } = especie;
    // console.log(name);
    // console.log(residents);
    if (name === animal) {
      return residents.every((resident) => resident.age >= age);
    }
    return null;
  });
  return result;
}

module.exports = getAnimalsOlderThan;
