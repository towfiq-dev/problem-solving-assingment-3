let myEvenArray = [1,2,3,4,5,6,7,8,9,10]
function evenavg(numbers){
  let evennums = []
  for(let number of numbers){
    if(number % 2 !== 1){
      evennums.push(number)
    }
  }
  let sum =0
  for(let evennum of evennums){
    sum = evennum + sum
  }
  let count = evennums.length
  let avg = sum/count
  return avg
}
let result = evenavg(myEvenArray)
console.log(result)