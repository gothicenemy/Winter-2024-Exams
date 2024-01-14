// Find key by value
'use strict';

const getKey = (object, ...rest) => {
  const value = rest.pop();
  const name = Object.keys(object);
  for (const key of name) {
    if (object[key] === value) return key;
  }
  return undefined;
};

module.exports = getKey;
