const data = require("../data/zoo_data");

const species = [...data.species]

function getSpeciesByIds(...ids) {
  // seu código aqui

  const animal = ids.map((id) => species.find(specie => specie.id === id))
    
  return animal
}


// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))

module.exports = getSpeciesByIds;
