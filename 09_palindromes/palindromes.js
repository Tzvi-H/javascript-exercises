const palindromes = function (string) {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    while (left < right && !isALetter(string[left])) {
      left++
    }
    while (left < right && !isALetter(string[right])) {
      right--
    }
    if (string[left].toLowerCase() !== string[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isALetter = x => {
  const code = x.toLowerCase().charCodeAt();
  return code >= 97 && code <= 122;
}

// Do not edit below this line
module.exports = palindromes;
