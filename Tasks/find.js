// Find key by value
'use strict';

const getKey = (object, ...rest) => {
  const value = rest.pop();
  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  return undefined;
};

module.exports = getKey;
