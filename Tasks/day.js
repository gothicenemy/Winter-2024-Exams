// Get day number
'use strict';

const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseWeek = (s) => {
  for (let i = 0; i < Days.length; i++) {
    const weekParsing = s.startsWith(Week[i].toLowerCase());
    if (weekParsing) return i + 1
  }
  return -1;
};

module.exports = parseWeek;
