//  ** Heap Sort translated into Javascript
//
// I used Intro to Algorithms to help design this solution.
//------------------------------------------------------------------------------

var heapify = function (nums, index, heapsize) {
  var left = 2 * index + 1;
  var right = 2 * index + 2;
  var largest = index;
  if(left < heapsize && nums[left] > nums[index]){
    largest = left;
  }
  if(right < heapsize && nums[right] > nums[largest]){
    largest = right;
  }
  if(largest !== index){
    var temp = nums[index];
    nums[index] = nums[largest];
    nums[largest] = temp;
    heapify(nums, largest, heapsize);
  }
};

var buildHeap = function (nums){
  var heapsize = nums.length;
  for(var i = Math.floor(nums.length / 2); i >= 0; i--){
    heapify(nums, i, heapsize);
  }
  return nums;
};

var heapSort = function (nums){
  var heapsize = nums.length;
  buildHeap(nums);
  for(var i = nums.length - 1; i > 0; i--){
    var temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;
    heapsize--;
    heapify(nums, 0, heapsize);
  }
  return nums;
};

var test = [5,1,3,4,2];
console.log(heapSort(test));
