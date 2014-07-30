// This is the solution to the problem of how to sort a stack in ascending
// order only using one additional stack and a temporary variable.

var isEmpty = function (stack){
    if(stack.length <= 0){
        return true;
    }
    return false;
};

var peek = function(stack){
    return stack[stack.length -1];
};

var ascendingSort = function (stack){
    var newStack = [];
    var orgStack = stack;
    var tmp;
    while(!isEmpty(orgStack)){
        tmp = orgStack.pop();
        while(!isEmpty(newStack) && (peek(newStack) > tmp)){
            orgStack.push(newStack.pop());
        }
        newStack.push(tmp);
    }
    return newStack;
};

//Test isEmpty
var test = [];
test[0] = "one";
console.log("This is the isEmpty Test: " + isEmpty(test));

//Test Peek
var test = [1,2,3];
console.log(test.length);
console.log("This is the peek test " + peek(test));

//Test Ascending Sort
var testStack = [5,3,2,4,1];
console.log(ascendingSort(testStack));
console.log(testStack);




