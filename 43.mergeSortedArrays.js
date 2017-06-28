function mergeArrays(array1, array2) {
  var mergedArray = [];
  var index1 = 0;
  var index2 = 0;

  for (var mergedIndex = 0; mergedIndex < array1.length + array2.length; mergedIndex++) {
    if (!array2[index2] || array1[index1] <= array2[index2]) {
      mergedArray.push(array1[index1]);
      index1++;
    } else {
      mergedArray.push(array2[index2]);
      index2++;
    }
  }

  return mergedArray;

}

module.exports = mergeArrays;