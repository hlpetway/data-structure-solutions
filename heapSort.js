//  ** Heap Sort translated into Javascript
//
// I used Intro to Algorithms to help design this solution.
//------------------------------------------------------------------------------

var maxHeapify = function (nums, index, heapsize) {
  var left = 2 * index + 1;
  var right = 2 * index + 2;
  var largest = index;
  if(left < heapsize && nums[left] > nums[index]){
    largest = left;
  } else {
    largest = index;
  }
  if(right < heapsize && nums[right] > nums[largest]){
    largest = right;
  }
  if(largest !== index){
    var temp = nums[index];
    nums[index] = nums[largest];
    nums[largest] = temp;
    maxHeapify (nums, largest, heapsize);
  }
};

var buildMaxHeap = function (nums){
  var heapsize = nums.length;
  for(var i = Math.floor(nums.length / 2); i >= 0; i--){
    maxHeapify(nums, i, heapsize);
  }
  return nums;
};

var heapSort = function (nums){
  var heapsize = nums.length;
  buildMaxHeap(nums);
  for(var i = nums.length - 1; i > 0; i--){
    var temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;
    heapsize--;
    maxHeapify(nums, 0, heapsize);
  }
  return nums;
};

var test = [5,1,6,4,2,7,3];
console.log(heapSort(test));

//This does not work... trouble shoot
