// Get day number
'use strict';

const Days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseWeek = (s) => {
  for (let i = 0; i < Days.length; i++) {
    const weekParsing = s.startsWith(Week[i]);
    if (weekParsing) return i + 1
  }
  return -1;
};

module.exports = parseWeek;
