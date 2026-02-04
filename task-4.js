function wordLenth (text){
let words = text.split(' ')
let longestword = ''
for(let word of words){
  if(word.length>longestword.length){
    longestword = word
  }
}
return longestword
}
let mySentence = "I am learning Programming to become a programmer"
let result = wordLenth(mySentence)
console.log(result)