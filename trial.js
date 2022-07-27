console.log("Hello world");

let sentence = "Hel World Bro Beast";
let toScramble = "Hel Beast";
toScramble = toScramble.split(" ");

for (word of toScramble) {
  if (sentence.includes(word)) {
    sentence = sentence.replace(word, "*".repeat(word.length));
  }
}

console.log(sentence);
