console.log("Hello world");

let sentence = "Hel World Bro Beast";
let toScramble = "Hel Beast";
toScramble = toScramble.split(" ");
let replacement = "*";
let numberOfWordsScrambled = toScramble.length;
let numberOfscrambledCharacters = 0;
for (word of toScramble) {
  if (sentence.includes(word)) {
    numberOfscrambledCharacters += word.length;
    sentence = sentence.replace(word, replacement.repeat(word.length));
  }
}

console.log(sentence);
console.log(numberOfWordsScrambled);
console.log(numberOfscrambledCharacters);
