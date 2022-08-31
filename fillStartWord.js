const { template } = require("@babel/core");

function fillStartWord(startWord, word) {
  if (word == undefined || word == null) {
    console.log(undefined);
  } else if (word.includes(startWord)) {
    console.log(word);
  } else {
    console.log(startWord + word);
  }
}

module.exports = fillStartWord;