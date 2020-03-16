
exports.min = function min (array) {
    if (!array) {
        return 0;
    }
    let result = 0;
    array.forEach(element => {
        if (isNaN(element)) {
            return 0;
        }
        element < result ? result = element : null;
    });
  return result;
}

exports.max = function max (array) {
    if (!array) {
        return 0;
    }
    let result = 0;
    array.forEach(element => {
        if (isNaN(element)) {
            return 0;
        }        
        element > result ? result = element : null;
    });
  return result;
}

exports.avg = function avg (array) {
    if (!(array && array.length)) {
        return 0;
    }
    let sum = 0;
    array.forEach(element => {
        if (isNaN(element)) {
            return 0;
        }        
        sum += element;
    });
  return sum / array.length;
}
