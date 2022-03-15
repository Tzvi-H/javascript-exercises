const removeFromArray = function(array, ...args) {
  return array.filter(num => args.indexOf(num) === -1)
};

// Do not edit below this line
module.exports = removeFromArray;
