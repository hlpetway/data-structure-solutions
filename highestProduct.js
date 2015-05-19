// ** Interview Cake **
//
// Given an array_of_ints, find the highest_product you can get from three of the integers.
// The input array_of_ints will always have at least three integers.
// -----------------------------------------------------------------------------

var test = [1,3,5,2,6,7];

var findHighestProduct = function (testArray){

var highest = 0;
var lowest = testArray[0];
var highestProdOfTwo = 0;
var lowestProdOfTwo = testArray[0]*testArray[1];
var highestProdOfThree = 0;

  for( var i = 0; i < testArray.length; i++) {
    if((testArray[i]*testArray[i+1]) > highestProdOfTwo){
      highestProdOfTwo = (testArray[i]*testArray[i+1]);
    }
    if((testArray[i]*testArray[i+1]) < lowestProdOfTwo){
      lowestProdOfTwo = (testArray[i]*testArray[i+1]);
    }
    if((testArray[i]*highestProdOfTwo) > highestProdOfThree){
      highestProdOfThree = (testArray[i]*highestProdOfTwo);
    }
    if(testArray[i] < lowest){
      lowest = testArray[i];
    }
    if(testArray[i] > highest){
      highest = testArray[i];
    }
  }
  return highestProdOfThree;

};

console.log(findHighestProduct(test));


// TODO: Solve with merge sort
// Sort the array and then multiply the three greatest intergers?
// We can do it in O(n log n) time, merge sort I believe.
