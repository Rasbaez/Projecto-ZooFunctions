const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

//  console.log(hours)

const getOfficeHours = (day) => {
  if (hours[day].open === 0) {
    return 'LOSED';
  }
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
};

// console.log(getOfficeHours('Wednesday'))

function searchAnimalPerDay(day) {
  const findAnimal = species.reduce((acc, curr) => {
    if (curr.availability.includes(day)) {
      acc.push(curr.name);
    }
    return acc;
  }, []);
  if (findAnimal.length === 0) {
    return 'The zoo will be closed!';
  }
  return findAnimal;
}
// console.log(searchAnimalPerDay('Monday'))
// console.log(searchAnimalPerDay('Tuesday'))
// console.log(searchAnimalPerDay("Wednesday"));

function zooSchedule(srchDay) {
  const scheduleObj = {};

  if (srchDay === undefined) {
    Object.keys(hours).forEach((day) => {
      scheduleObj[[day]] = {
        officeHour: getOfficeHours(day),
        exhibition: searchAnimalPerDay(day),
      };
    });
  } else {
    scheduleObj[[srchDay]] = {
      officeHour: getOfficeHours(srchDay),
      exhibition: searchAnimalPerDay(srchDay),
    };
  }

  return scheduleObj;
}

// console.log(zooSchedule('Tuesday'))
// console.log(zooSchedule('Wednesday'))

function getSchedule(scheduleTarget) {
  const findAnimal = (elem) => species.find(({ name }) => name === elem).availability;
  const animalsList = species.map(({ name }) => name);
  const daysOWeek = Object.keys(hours);

  if (animalsList.includes(scheduleTarget)) return findAnimal(scheduleTarget);
  if (scheduleTarget === undefined) return zooSchedule();
  if (!daysOWeek.includes(scheduleTarget)) return zooSchedule();
  if (daysOWeek.includes(scheduleTarget)) return zooSchedule(scheduleTarget);
}
// console.log(getSchedule("lions"));
// console.log(getSchedule("penguins"));
// console.log(getSchedule());
// console.log(getSchedule("qualquercoisa"));
// console.log(zooSchedule('Monday'));
// console.log(getSchedule("Tuesday"));

module.exports = getSchedule;
