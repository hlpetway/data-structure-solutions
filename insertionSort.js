// ** Insertion Sort **
// Faster on a small data set than Merge, but is much slower as n grows very large.
// Translated from psuedo code in Introduction to Algorithms by Cormen, et al.
// Complexity of O(N^2)


var insertionSort = function (arrayToSort){
  for(var j = 1; j < arrayToSort.length; j++){
    key = arrayToSort[j];
    var i = j - 1;
    while((i >= 0) && (arrayToSort[i] > key)){
      arrayToSort[i+1] = arrayToSort[i];
      i--;
      arrayToSort[i+1] = key;
    }
  }
  return arrayToSort;
};

var test = [5,2,4,6,1,3];
console.log(insertionSort(test));
