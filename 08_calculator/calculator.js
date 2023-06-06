const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};


const power = function(num, by) {
  let total = 1;
  
  while (by > 0) {
    total *= num;
    by--;
  }
  
  return total;
};


const factorial = function(num) {
  if (num >= 0) {
    let total = 1;
    while (num > 1) {
      total *= num;
      num--;
    }
    return total;
  } else {
    return "Factorial is undefined for negative numbers.";
  }
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
