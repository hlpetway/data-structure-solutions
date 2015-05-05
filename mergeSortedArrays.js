// Given two sorted integer arrays A and B, merge B into A as one sorted array.
// You may assume that A has enough space to hold additional elements from B.
// The number of elements initialized in A and B are m and n respectively.

var a = [1,2,3];
var b = [4,5,6];

var mergeArrays = function (arrayA,arrayB) {
  var aCurrentPosition = 0;
  var bCurrentPosition = 0;
  var length = arrayA.length + arrayB.length;

  if((arrayA.length === 0) || (arrayB.length === 0)) {
    console.log("Error: One or More Arrays are Empty");
    return;
  }
  for(var i = 0; i < length; i++) {
      if((arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayB[bCurrentPosition] < arrayA[aCurrentPosition+1])) {
        arrayA.push(arrayB.shift());
        bCurrentPosition++;
      }
      else if((arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayB[bCurrentPosition] > arrayA[aCurrentPosition+1])) {
        aCurrentPosition++;
        console.log("Incrementing Array A: " + arrayA);
      }
      else if((arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayA[aCurrentPosition+1] === undefined)) {
        arrayA.push(arrayB.shift()); //cannot push on a value that is undefined.. take a look into this issue.
        bCurrentPosition++;
      }
  }
  console.log("Array length: " + arrayA.length +": " + arrayA);
  console.log("Array length: " + arrayB.length +": " + arrayB);
};

mergeArrays(a,b);

//We're left with the last value in Array B. Is this due to the incrementing of the position?
//Troubleshoot this!
