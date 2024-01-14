// Find longest string
'use strict';

const longestWord = (line = []) => {
  let maxLength = -1;
  let longest = undefined;
  for (const word of line) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return s;
};

module.exports = longest;
