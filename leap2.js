function leapYear(year){
if(year % 100 !== 0 && year % 4 === 0){
  return true
}
else if(year % 400 === 0 && year % 100){
  return true
}
else{
  return false
}
}
let leap = leapYear(2024)
console.log(leap)