//
// ** Merge Sort for Unsorted Array**
// O(n log n) - Worst
//
// I tested this against Quick Sort in JSPerf.com: http://jsperf.com/mergesort-vs-quicksort
// Quick Sort beats Merge Sort Across the Board - maybe due to lack of tail recursion
// Resource: http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/
// ----------------------------------------------------------------------------

var test = [2,4,1,6,3,5];

var merge = function (left, right){
    var result = [];
    var il = 0;
    var ir = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
};

var mergeSort = function (items){
    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }
    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
};

var generateHugeDataSet = function (){
  var largeArray = [];
for(var i = 0; i < 2000000; i++){
  largeArray[i] = Math.floor(Math.random() * 2000000);
}
return largeArray;
};

console.time("sort");
console.log(mergeSort(generateHugeDataSet()));
console.timeEnd("sort");


// 3940 ms to run 1,000,000 integers. (It's still slower than quick sort at this point.)
// 7960 ms to run 2,000,000 integers. (Almost 2 seconds slower 1813 ms.)
