// Problem: Rotate an array of n elements to the right by k steps.
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
// How many different ways do you know to solve this problem?

// ** Iterative Solution **

var numbers = [1,2,3,4,5,6,7];

var rotateArray = function (setOfNumbers,k,n) {
  positionsRotated = k;
  sizeOfArray = n;

  if((k > 0) && (setOfNumbers.length > 0)){
    //We want to loop through that k number of times, each time popping from the back and unshifting to the front

    for(var i = 0; i < k; i++){
      numberToRotate = setOfNumbers.splice((n-1),1);
      setOfNumbers.unshift(numberToRotate[0]);
      console.log(setOfNumbers);
    }
    console.log(setOfNumbers);
    return setOfNumbers;
  }
  else
  console.log("The Array is empty or Amount Rotated is Zero.");
};

rotateArray(numbers,4,7);
