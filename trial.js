let sentence = "Hel World Bro Beast";

//List of the words to replace
let toScramble = "Hel Beast";
toScramble = toScramble.split(" ");

//what to replace the word with
let replacement = "*";

//More information
let numberOfWordsScrambled = toScramble.length;
let numberOfScrambledCharacters = 0;

//Replace process
for (word of toScramble) {
  if (sentence.includes(word)) {
    numberOfScrambledCharacters += word.length;
    sentence = sentence.replace(word, replacement.repeat(word.length));
  }
}

//Output
console.log(sentence);
console.log(numberOfWordsScrambled);
console.log(numberOfScrambledCharacters);
