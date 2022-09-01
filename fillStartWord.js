const { template } = require("@babel/core");

function fillStartWord(startWord, word) {
  if (startWord.includes(word)) {
    return word
  } else if (word === null || word === undefined) {
    return undefined
  } else {
    return startWord + word
  }
}

module.exports = fillStartWord;