//
//** Bucket Sort **
//
// Worst Case - O(N^2)
// Average Case - O(N+K)
//------------------------------------------------------------------------------
// I tested this against merge sort in jsperfcom:
// http://jsperf.com/mergesort-vs-quicksort

var test = [2,4,1,6,3,5];

var quickSorts = function (nums) {
  if(nums.length === 0){
    return [];
  }
  var left = [];
  var right = [];
  var pivot = nums[0];
  //go through each element and compare to our pivot
  for(var i = 1; i < nums.length; i++){
    if(nums[i] < pivot){
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return quickSorts(left).concat(pivot, quickSorts(right));
};

quickSorts(test); // returns [1,2,3,4,5,6]
test.sort();   // returns [1,2,3,4,5,6]

var generateHugeDataSet = function (){
  var largeArray = [];
for(var i = 0; i < 1000000; i++){
  largeArray[i] = Math.floor(Math.random() * 1000000);
}
return largeArray;
};

console.time("sort");
console.log(quickSorts(generateHugeDataSet()));
console.timeEnd("sort");

// 43-45ms for 10,000 integers (Just a few miliseconds slower than Merge Sort)
// 88-95ms for 20,000 integers.
// 410-430ms for 100,000 integers.
// 4545 ms for 1,000,000 integers. (Takes 605 ms longer at this point.)
