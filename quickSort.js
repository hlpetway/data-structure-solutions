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

console.log(test.sort());

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};

if(quickSorts(test).equals(test.sort())){
  console.log("Both functions are equal");
}
