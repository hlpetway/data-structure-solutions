// Problem: Rotate an array of n elements to the right by k steps.
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
// How many different ways do you know to solve this problem?
// I compare the performance of both solutions here: http://jsperf.com/rotatearrayiterationvsrecursionsolutions

// ** Iterative Solution **

var numbers = [1,2,3,4,5,6,7];

var rotateArray = function (numberSet,k,n) {
  var positionsRotated = k;
  var sizeOfArray = n-1;

  if((positionsRotated > 0) && (numberSet.length > 0)){
    // We want to loop through that k number of times,
    // each time splicing from the back and unshifting to the front

    for(var i = 0; i < positionsRotated; i++){
      var numberToRotate = numberSet.splice((sizeOfArray),1);
      numberSet.unshift(numberToRotate[0]);
    }
    return numberSet;
  }
  else
  console.log("The Array is empty or Amount Rotated is Zero.");
};

rotateArray(numbers,4,7);


//-------------------------------------------------------------------
// ** Recursive Solution **

var numbers = [1,2,3,4,5,6,7];

var recursiveRotateArray = function (numberSet,k,n) {
  var counter = k;
  var sizeOfArray = n;

  if(counter > 0){
    var numberToRotate = numberSet.splice((sizeOfArray-1),1);
    numberSet.unshift(numberToRotate[0]);
    counter--;
    return recursiveRotateArray(numberSet,counter,7);
  }
  return numberSet;

};
recursiveRotateArray(numbers,4,7);
