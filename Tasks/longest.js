// Find longest string
'use strict';

const longest = function (line = [] {
  x = -1;

  for (i of line) {
    if (i.length > x) {
      x = i.length;

      s = i;

    }
  }

  return s;
};

module.exports = longest;
