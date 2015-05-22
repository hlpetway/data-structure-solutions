//  ** Heap Sort translated into Javascript
//
// I used Intro to Algorithms to help design this solution.
//------------------------------------------------------------------------------

var maxHeapify = function (nums, i, heapsize) {
  var lNode = 2 * i + 1;
  var rNode = 2 * i + 2;
  var largest = i;
  if(lNode < nums.heapsize && nums[lNode] > nums[i]){
    largest = lNode;
  } else {
    largest = i;
  }
  if(rNode < nums.heapsize && nums[rNode] > nums[largest]){
    largest = rNode;
  }
  if(largest !== i){
    var temp = nums[i];
    nums[i] = nums[largest];
    nums[largest] = temp;
    maxHeapify (nums, i, nums.length);
  }
};

var buildMaxHeap = function (nums){
  var heapsize = nums.length;
  for(var i = Math.floor(nums.length/2); i >= 0; i--){
    maxHeapify(nums, i, heapsize);
  }
  return nums;
};

var heapSort = function (nums){
  var heapsize = nums.length;
  buildMaxHeap(nums);
  for(var i = nums.length-1; i>=0; i--){
    var temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;
    maxHeapify(nums, 0, heapsize);
  }
  return nums;
};

var test = [10,3,8,1,6,9,5,4,2,7];
console.log(heapSort(test));

//This does not work... trouble shoot
