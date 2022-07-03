const data = require('../data/zoo_data');

const { prices } = data;
// console.log(prices);

function countEntrants(entrants) {
  const persons = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((visitant) => {
    if (visitant.age < 18) {
      persons.child += 1;
    } else if (visitant.age >= 50) {
      persons.senior += 1;
    } else {
      persons.adult += 1;
    }
  });
  return Object.entries(entrants).length === 0 ? 0 : persons;
}

function calculateEntry(entrants = 0) { // default parameter para definir como 0 ainda não entendi bem esse ponto mas vi no mdn (Functions/Default_parameters)
  if (Object.entries(entrants).length === 0) return 0;
  const visitantsCounter = countEntrants(entrants);
  const { adult, senior, child } = visitantsCounter;
  const arrOfPrices = Object.values(prices);
  const [adultPrice, seniorPrice, childPrice] = arrOfPrices;
  const total = adult * adultPrice + senior * seniorPrice + child * childPrice;

  return entrants === {} ? 0 : total;
}

module.exports = { calculateEntry, countEntrants };
