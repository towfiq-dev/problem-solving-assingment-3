function gramToKg(gram){
let kg = gram/1000
let kgResults = parseInt(kg)
let grams = gram % 1000
let kgResult =kgResults + ' ' + 'KG' + ' ' + grams + ' ' + 'Gram'
return kgResult  
}
let kgResult = gramToKg(3987)
console.log(kgResult)