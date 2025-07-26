const convertToCelsius = function(num) {
  return Math.round(((5/9) * (num - 32)) * 10) / 10;
};

const convertToFahrenheit = function(num) {
  return Math.round(((9/5 * num + 32)) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
