//
// ** Merge Sort for Unsorted Array**
// O(n log n) - Worst
//
// I tested this against Quick Sort in JSPerf.com: http://jsperf.com/mergesort-vs-quicksort
// Merge Sort Won! As the data set approaches the millions the difference between Merge and Quick Sort widens.
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
for(var i = 0; i < 1000000; i++){
  largeArray[i] = Math.floor(Math.random() * 1000000);
}
return largeArray;
};

console.time("sort");
console.log(mergeSort(generateHugeDataSet()));
console.timeEnd("sort");


//TODO: RE Test against a true Quick Sort.

// Quick Sort is faster when data set is only 20-50 integers.
// 37-40 ms to run 10,000 integers (this is 5-10 ms faster than quick sort)
// 360-380 ms to run 100,000 integers! (The gap continues to widen.)
// 3940 ms to run 1,000,000 integers! (It's 605 ms faster at this point.)
