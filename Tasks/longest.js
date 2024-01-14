// Find longest string
'use strict';

const longestWord = (line = []) => {
  let maxLength = -1;
  let longest = undefined;
  for (const word of line) {
    const { length } = word;
    if (length > maxLength) {
      maxLength = length;
      longest = word;
    }
  }

  return longest;
};

module.exports = longestWord;
