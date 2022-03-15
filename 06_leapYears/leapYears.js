const leapYears = function(year) {
  return (year % 400 === 0) ||
         (year % 4 === 0 && year % 100 !== 0);
};

// Do not edit below this line
module.exports = leapYears;

/*
- divisible by 4
- not divisible by 100
- unless divisible by 400

*/