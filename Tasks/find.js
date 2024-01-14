// Find key by value
'use strict';

const getKey = (object, ...rest) => {
  const value = rest.pop();
  for (name in object) {
    if (object[name] === value) return name;
  }
  return undefined;
};

module.exports = getKey;
