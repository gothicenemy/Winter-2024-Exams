// Split an array into two parts
'use strict';

const splitArray = (splitPoint, array) => {
  const begin = array.splice(0, splitPoint);
  array = array.splice(-splitPoint);
  return [begin, array];
};

module.exports = splitArray;
