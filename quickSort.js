//
// ** Quick Sort - With Partition and Swap Function **
//
//Javascript's own .sort() is a quick sort
// O(n log n) - Average  O(n^2) - Worst
//
// RESOURCE: http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
//------------------------------------------------------------------------------

var items = [4, 2, 6, 5, 3, 9];

var swap = function (items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

var partition = function (items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
};

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

var result = quickSort(items, 0, items.length - 1);

console.log(result); // returns [2,3,4,5,6,9]
