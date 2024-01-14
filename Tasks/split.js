// Split an array into two parts
'use strict';

const splitArray = (splitPoint, array) => {
  const begin = array.slice(0, splitPoint);
  const len = array.length;
  array = array.slice(splitPoint, len);
  return [begin, array];
};

module.exports = splitArray;
