// ** Interview Cake **
//
// Given an array_of_ints, find the highest_product you can get from three of the integers.
// The input array_of_ints will always have at least three integers.
// -----------------------------------------------------------------------------

var test = [1,3,5,2,6,7];

var findHighestProduct = function (testArray){

var highest = Math.max(testArray[0],testArray[1]);
var lowest = Math.min(testArray[0],testArray[1]);
var highestProdOfTwo = (testArray[0] * testArray[1]);
var lowestProdOfTwo = (testArray[0] * testArray[1]);
var highestProdOfThree = (testArray[0] * testArray[1] * testArray[2]);

  for( var i = 2; i < testArray.length; i++) {
    var current = testArray[i];

    highestProdOfThree = Math.max(highestProdOfThree,current*highestProdOfTwo,current*lowestProdOfTwo);

    highestProdOfTwo = Math.max(highestProdOfTwo,current*highest,current*lowest);

    lowestProdOfTwo = Math.min(lowestProdOfTwo,current*highest,current*lowest);

    lowest = Math.min(current,lowest);

    highest = Math.max(current,highest);

  }
  return highestProdOfThree;

};

console.log(findHighestProduct(test));

//------------------------------------------------------------------------------
// ** Solve with Merge Sort **
//
// Sort the array and then multiply the three greatest intergers
// We can do it in O(n) time with merge sort I believe.

var merge = function (left, right){
  var result = [];
  var i_left = 0;
  var i_right = 0;
  while(i_left < left.length && i_right < right.length){
    if(left[i_left] < right[i_right]){
      result.push(left[i_left++]);
    }
    else {
      result.push(right[i_right++]);
    }
  }
  return result.concat(left.slice(i_left)).concat(right.slice(i_right));
};

var mergeSort = function (arrayToMerge) {
  if(arrayToMerge.length < 2){
    return arrayToMerge;
  }
  var middle = Math.floor(arrayToMerge.length / 2);
  var left = arrayToMerge.slice(0, middle);
  var right = arrayToMerge.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

var findHighestProduct = function (testArray){
  var sortedArray = mergeSort(testArray);
  var highestProductOfThree = 1;
  for(var i = sortedArray.length-1; i > sortedArray.length-4; i--){
    highestProductOfThree = highestProductOfThree * sortedArray[i];
  }
  return highestProductOfThree;
};

console.log(findHighestProduct(test));
