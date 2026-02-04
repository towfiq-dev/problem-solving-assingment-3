let num = [0,1,1,4,3,5,2,3,4,6,7,8,9,8,6,10,2,5]
function noDublicate(numbers){
  let uniqueNumber = []
for(let number of numbers){
  if(uniqueNumber.includes(number)===false){
    uniqueNumber.push(number)
  }
}
return uniqueNumber
}
let result = noDublicate(num)
console.log(result)
