const findTheOldest = function(people) {
  return people.sort((a, b) => {
    const ageA = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
    return ageB - ageA;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
