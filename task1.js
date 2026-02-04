function celsiusToFahrenheit(celsius){
let fahrenheit = (celsius*9/5)+32
let fahrenheitResult = fahrenheit + ' ' + 'deg' + ' ' + 'Celsius'
return fahrenheitResult
}
let Result = celsiusToFahrenheit(30)
console.log(Result)