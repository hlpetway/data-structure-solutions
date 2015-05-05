//
// Given two sorted integer arrays A and B, merge B into A as one sorted array.
// You may assume that A has enough space to hold additional elements from B.
// The number of elements initialized in A and B are m and n respectively.
//
// BONUS: What if there are repeated intergers?
// ----------------------------------------------------------------------------------
//
// ** Iterative Solution ***

var a = [1,2,3];
var b = [4,5,6];

var mergeArrays = function (arrayA,arrayB) {
  var aCurrentPosition = 0;
  var bCurrentPosition = 0;
  var length = arrayA.length * arrayB.length;

  if((arrayA.length === 0) || (arrayB.length === 0)) {
    console.log("Error: One or More Arrays are Empty");
    return;
  }
  for(var i = 0; i < length; i++) {
      if(((arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayB[bCurrentPosition] < arrayA[aCurrentPosition+1])) ||
      ((arrayB[bCurrentPosition] === arrayA[aCurrentPosition]))) {
        arrayA.splice(aCurrentPosition+1, 0, arrayB.shift());
        console.log("Inserting into Array A: " + arrayA);
      }
      else if(((arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayB[bCurrentPosition] > arrayA[aCurrentPosition+1])) ||
      (arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayB[bCurrentPosition+1] === arrayA[aCurrentPosition+1])) {
        aCurrentPosition++;
      }
      else if((arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayA[aCurrentPosition+1] === undefined)) {
        arrayA.push(arrayB.shift());
        console.log("Pushing to end of Array A: " + arrayA);
      }
  }
  console.log("Array length: " + arrayA.length +": " + arrayA);
  console.log("Array length: " + arrayB.length +": " + arrayB);
  return arrayA;
};

//mergeArrays(a,b);

//This also works if the arrays are sorted but are not complete with consecutive integers.

var c = [1,3,4];
var d = [2,2,5,6];

mergeArrays(c, d);

//need to debug, the loop is breaking after moving the first 2. I'm adding logic to handle repeat values.




// ----------------------------------------------------------------------------------
//
// ** Recursive Solution **
//

var recursiveMergeArrays = function (arrayA,arrayB,counter) {
  var aCurrentPosition = counter;
  var bCurrentPosition = counter;
  var length = arrayA.length * arrayB.length;

  if((arrayA.length === 0) || (arrayB.length === 0)) {
    console.log("Error: One or More Arrays are Empty");
    return;
  }
  if((arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayB[bCurrentPosition] < arrayA[aCurrentPosition+1])) {
      arrayA.splice(aCurrentPosition+1, 0, arrayB.shift());
      console.log("Inserting into Array A: " + arrayA);
  }
  else if((arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayB[bCurrentPosition] > arrayA[aCurrentPosition+1])) {
      aCurrentPosition++;
  }
  else if((arrayB[bCurrentPosition] > arrayA[aCurrentPosition]) && (arrayA[aCurrentPosition+1] === undefined)) {
      arrayA.push(arrayB.shift());
      console.log("Pushing to end of Array A: " + arrayA);
  }
  recursiveMergeArrays(arrayA, arrayB, counter+1);

  console.log("Array length: " + arrayA.length +": " + arrayA);
  console.log("Array length: " + arrayB.length +": " + arrayB);
  return arrayA;
};

//mergeArrays(a,b,0);
