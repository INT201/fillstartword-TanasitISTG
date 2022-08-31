const { template } = require("@babel/core");

function fillStartWord(startWord, word) {
  // if (word === undefined || word === null) {
  //   console.log(undefined);
  // } else if (word.includes(startWord)) {
  //   console.log(word);
  // } else {
  //   console.log(startWord + word);
  // }

  if (word.includes(startWord)) {
    console.log(word);
  } else if (word === undefined || word === null) {
    console.log(undefined);
  } else {
    console.log(startWord + word);
  }
}

fillStartWord("1-2565-", "Hello World");

module.exports = fillStartWord;
