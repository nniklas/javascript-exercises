const convertToCelsius = function(fahrenheit) {
  // x-32*5/9
  let celsius = (fahrenheit-32)*5/9;
  //round to 1 decimal
  celsius = Math.round(celsius * 10) / 10;
  return celsius
};

const convertToFahrenheit = function(celsius) {
  // x *9/5+32
  let fahrenheit = celsius * 9/5 + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10
  return fahrenheit

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
