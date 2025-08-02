const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for(let num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let sum = 1;
	for(let num of array) {
    sum *= num;
  }
  return sum;
};

const power = function(one, two) {
	return Math.pow(one, two);
};

const factorial = function(num) {
  let factorial = 1;
	for(let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
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
