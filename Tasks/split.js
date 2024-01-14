// Split an array into two parts
'use strict';

const splitArray = (splitPoint, array) => {
  const firstPart = array.splice(0, splitPoint);
  const secondPart = array.splice(-splitPoint);
  return [firstPart, secondPart];
};

module.exports = splitArray;
