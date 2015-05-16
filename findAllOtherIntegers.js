// You have an array of integers, and for each index you want to find the
// product of every integer except the integer at that index.
// Write a function get_products_of_all_ints_except_at_index() that takes
// an array of integers and returns an array of the products.

// For example, given:
// [1, 7, 3, 4]

// your function would return:
// [84, 12, 28, 21]

// by calculating:
// [7*3*4, 1*3*4, 1*7*4, 1*7*3]

// Do not use division in your solution.
//
// -----------------------------------------------------------------------------

var findAllOtherIntegers = function (array){
  var newArray = [];
  var multiply = "*";
  var listToMultiply ='';
  for(var i = 0; i < array.length; i++){
    for(var j = 1; j < array.length; j++){
      listToMultiply.concat(array[j]);
    }
    newArray[i] = listToMultiply;
  }
    return newArray;
};
