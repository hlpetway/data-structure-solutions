//
//** Quick Sort **
//
//Javascript's own .sort() is a quick sort
//------------------------------------------------------------------------------
//

test = [2,4,1,6,3,5];

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

console.log(quickSorts(test));
