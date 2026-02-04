function findNumber(numbers, find){
let count = 0
for(let number of numbers){
  if(number === find){
  count = count + 1
  }
}
return count
}
let numberArray = [2,4,5,3,6,7,4,7,3,5,2,5,9,5,0,1,5]
let unique = 5
let result = findNumber(numberArray, unique)
console.log(result)