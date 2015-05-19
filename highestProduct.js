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


// TODO: Solve with merge sort
// Sort the array and then multiply the three greatest intergers?
// We can do it in O(n log n) time, merge sort I believe.
