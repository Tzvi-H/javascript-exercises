const fibonacci = function(x) {
  x = parseInt(x);
  if (x < 0) {
    return 'OOPS';
  }

  let a = 1;
  let b = 1;
  let count = 2;

  while (count < x) {
    [ b, a ] = [ a + b, b ]
    count++
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;