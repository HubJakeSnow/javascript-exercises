const convertToCelsius = function(fahrenheit) {
  const toCel = (fahrenheit - 32) * (5/9)
  const convCel = parseFloat(toCel.toFixed(1));
  return convCel
};

const convertToFahrenheit = function(celsius) {
  const toFah = (celsius * (9/5) + 32)
  const convFah = parseFloat(toFah.toFixed(1));
  return convFah
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};