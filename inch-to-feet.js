function inchToFeet(inchSize){
let feetSize = inchSize/12
let feetSizeResult = parseInt(feetSize)
let inchSizes = inchSize % 12 
let result = feetSizeResult + ' ' + 'Feet' + ' ' + inchSizes + ' ' + 'inch'
return result
}
let towfiqul = inchToFeet(68)
console.log(towfiqul)