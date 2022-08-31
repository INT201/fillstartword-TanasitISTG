const { template } = require("@babel/core");

function fillStartWord(startWord, word) {
  if (word.includes(startWord)) {
    return word;
  } else if (word === undefined || word === null) {
    return undefined;
  } else {
    return startWord + word;
  }
}

module.exports = fillStartWord;