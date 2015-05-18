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
//This solution is O(N^2)
//
/*
var findAllOtherIntegers = function (array){
  var newArray = [];
  var multiply = "*";
  for(var i = 0; i < array.length; i++){
    var listToMultiply = 1;
    for(var j = 0; j <array.length; j++){
      if(j!==i){
        var num = array[j];
        listToMultiply *= num;
      }
    }
    newArray[i] = listToMultiply;
  }
    return newArray;
};

var example = [1, 7, 3, 4];

console.log(findAllOtherIntegers(example));
*/

//------------------------------------------------------------------------------
//Using a Memoize-like approach
//Loop through multiplying intergers before each index for each position in the array.
//Then loop through backwards multiplying intergers after each index for each position. TADA!

var get_product_of_all_ints_except_index = function(arrayOfInt){
  productsOfAllIntegers = [1,1,1,1,1];
  //There is no way in JS to instantiate an array
  //of a specific size and with specific values other than looping through.
  //This is to help solve the zero or an array of size 1 edge cases.
  var product = 1;
  for( var i = 0; i < arrayOfInt.length; i++){
    productsOfAllIntegers[i] = product;
    product *= arrayOfInt[i];
  }
  for(i = arrayOfInt.length; i > 0; i--){
    productsOfAllIntegers[i] *= product;
    product *= arrayOfInt[i];
    console.log(productsOfAllIntegers[i]);
  }
  return productsOfAllIntegers;
};

var numbersToMultiply = [1,2,6,5,9];

console.log(get_product_of_all_ints_except_index(numbersToMultiply));
