let biranikhor = ['akib', 'sakib', 'rakib', 'akib', 'robel', 'rakib', 'sakib', 'joy', 'mela', 'mahi', 'rohim', 'akash', 'billal', 'mahi']
function noDublicate(arrays){
let unique = []
for(let array of arrays){
  if(unique.includes(array)===false){
    unique.push(array)
  }
}
return unique
}
let result = noDublicate(biranikhor)
console.log(result)