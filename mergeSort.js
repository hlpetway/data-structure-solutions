//
// ** Merge Sort for Unsorted Array**
//
// Resource: http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/
// ----------------------------------------------------------------------------

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

var test = [2,6,1,5,4,3];

console.log(mergeSort(test));
