const { template } = require("@babel/core");

function fillStartWord(startWord, word) {
  if (word == undefined || word == null) {
    return startWord
  } else if (word.includes(startWord)) {
    return word
  } else {
    return startWord + word
  }
}

module.exports = fillStartWord;