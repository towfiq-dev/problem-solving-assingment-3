function findTheVowel (text){
let count = 0;
for(let lower of text){
  if(lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u')
    count = count + 1
}
return count
}
let sentence = 'I Love Education'
let sentences = sentence.toLowerCase()
let result = findTheVowel(sentences)
console.log(result)