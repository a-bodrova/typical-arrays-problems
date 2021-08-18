
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let arr = Array.from(array);
  let min = Math.min.apply(null, arr);

  return min;
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let max = Math.max.apply(null, array);

  return max;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let arr = Array.from(array);
  let sum = arr.reduce( (acc, item) => acc + item);
  let avg = sum / arr.length;
  return avg;
}
