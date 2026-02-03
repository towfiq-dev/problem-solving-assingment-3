let myOodArray = [1,2,3,4,5,6,7,8,9,10]
function oodAvg(numbers){
  let odds = []
for(let number of numbers){
  if(number % 2 !== 0){
    odds.push(number)
  }
}
let sum =0
for(let odd of odds){
  sum = odd + sum
}
let count = odds.length
let avg = sum/count
return avg
}
let oodAvgResult = oodAvg(myOodArray)
console.log(oodAvgResult)