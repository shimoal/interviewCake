function sortList(list, max) {
  var sortedList = new Array(max + 1).fill(0);
  list.forEach(function(num, i) {
    sortedList[num] += 1;
  });
  
  var result = [];
  sortedList.forEach(function(amount, i) {
    while (amount > 0) {
      result.push(i);
      amount--;
    }
  });
  
  return result;
}

module.exports = sortList;