function randumNumber(min, max){
let fraction = Math.random()*(max-min)+1
let random = Math.floor(fraction)+min
return random
}
let minRange = 10
let maxRange = 20
let result = randumNumber(minRange, maxRange)
console.log(result)