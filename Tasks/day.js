// Get day number

const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseWeek = (s) => {
  for (let i = 0; i < Days.length; i++) {
    if (s.startsWith(Days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseWeek;
