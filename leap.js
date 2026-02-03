function leapYear(year){
if(year % 4 === 0){
  return true
}
else{
  return false
}
}
let leap = leapYear(2027)
console.log(leap)