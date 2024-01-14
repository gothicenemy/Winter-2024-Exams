// Find an intersection of two dictionaries
'use strict';

const intersection = (obj1, obj2) => {
  const result = {};
  const firstKeys = Object.keys(obj1);
  for (const key of firstKeys) {
    const value = obj1[key];
    if (obj2[key] === value) {
      result[key] = value;
    }
  }
  return result;
};

module.exports = intersection;
