// ** Extending Array Prototype **
// adding a method on the Array prototype
// so you can call this method on any array.
// RESOURCE:
// http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
//------------------------------------------------------------------------------

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

aTest = [2,4,1,6,3,5];
bTest = [2,4,1,6,3,5];

if(aTest.equals(bTest)){
  console.log("The Arrays are Equal");
}
