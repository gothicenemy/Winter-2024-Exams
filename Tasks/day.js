// Get day number
'use strict';

const Days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseWeek = (string) => {
  for (let i = 0; i < Days.length; i++) {
    if (string.startsWith(Days[i])) return i + 1
  }
  return -1;
};

module.exports = parseWeek;
