// This is an example of a solution to the following problem:
// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
// Find the minimum element.You may assume no duplicate exists in the array.

//Ex. [4,5,6,7,0,1,2]

// LOGIC:
// The right most will always be less than the left most or it is not a rotated sorted array. Verify this first.
// Then go through each value in the array, loop or recusively
// if the following value is less than the current value then we have found the true beginning.
// Check that the next value to the right of this value is larger,
// if larger then we have what we are looking for
// if equal then we have a duplicate and check the next value again
// if larger it is not a sorted, rotated array.

//** Iterative Solution **
var rotatedSortedArray = [4,5,6,7,0,1,2];

var lookForMinimum = function (numberSet) {
  currentPosition = 0;
  numberSetLength = numberSet.length-1;
  if(numberSet === []) {
    console.log("Error: The array is empty.");
  }
  else if(numberSet[0] <= numberSet[numberSetLength]) {
    console.log("Error: The array is not a rotated and sorted array.");
  }
  else
    for (var i = 0; i < numberSet.length; ++i) {
      if((numberSet[currentPosition] > numberSet[currentPosition+1]) && (numberSet[currentPosition+1] < numberSet[currentPosition+2])) {
        console.log("The minimum value is: " + numberSet[currentPosition+1]);
        return numberSet[currentPosition+1];
      }
      else if ((numberSet[currentPosition] > numberSet[currentPosition+1]) && (numberSet[currentPosition+1] > numberSet[currentPosition+2])) {
        console.log("Error: The array is not a rotated and sorted array.");
        return "Error: The array is not a rotated and sorted array.";
      }
      else
        currentPosition++;
    }
};

nonRotatedSortedArray = [1,2,3,4,5,6];
NonRoatedNonSortedArray = [6,2,1,4,5,3];

lookForMinimum(rotatedSortedArray);      // prints and returns The minimum value is: 0
lookForMinimum(nonRotatedSortedArray);   // prints and returns "Error: The array is not a rotated and sorted array." Because not rotated.
lookForMinimum(NonRoatedNonSortedArray); // prints and returns "Error: The array is not a rotated and sorted array." Because not sorted or rotated.


// ** Recursive Solution **

var rotatedSortedArray = [4,5,6,7,0,1,2];

var recursiveLookForMinimum = function (numberSet, currentPosition) {
  numberSetLength = numberSet.length-1;
  if(numberSet === []) {
    console.log("Error: The array is empty.");
  }
  else if(numberSet[currentPosition] <= numberSet[numberSetLength]) {
    console.log("Error: The array is not a rotated and sorted array.");
  }
  if((numberSet[currentPosition] > numberSet[currentPosition+1]) && (numberSet[currentPosition+1] < numberSet[currentPosition+2])) {
    console.log("The minimum value is: " + numberSet[currentPosition+1]);
    return numberSet[currentPosition+1];
  }
  else if ((numberSet[currentPosition] > numberSet[currentPosition+1]) && (numberSet[currentPosition+1] > numberSet[currentPosition+2])) {
    console.log("Error: The array is not a rotated and sorted array.");
    return "Error: The array is not a rotated and sorted array.";
  }
  else
  return recursiveLookForMinimum(rotatedSortedArray, currentPosition+1);
};

recursiveLookForMinimum(rotatedSortedArray, 0);      // prints and returns The minimum value is: 0
recursiveLookForMinimum(NonRoatedNonSortedArray, 0); // prints and returns "Error: The array is not a rotated and sorted array." Because not rotated.
