// Solving Fibonaci Recursively using Memoize
// I'm going to compare the recursive and recursive with memoize solutions and their performance.
// I will later compare Recursive-Memoize to Iteration
// http://www.sitepoint.com/implementing-memoization-in-javascript/
// ----------------------------------------------------------
// ** Recursive with Memoize
// Returns just the single value n

var fibonacci = (function (  ) {
    var memo = [0, 1];
    var fibMemo = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fibMemo(n-1) + fibMemo(n-2);
            memo[n] = result;
        }
        return result;
    };
    return fibMemo;
}( ));

//console.log(fibonacci(10));

// --------------------------------------------------
// ** Recursive Without Memoize **
// Returns just the single value n

function fibSimple(x) {
    if (x === 0) {
        return 0;
    } else if (x === 1) {
        return 1;
    } else {
        return fibSimple(x-1)+fibSimple(x-2);
    }
}
console.log(fibSimple(10));

// --------------------------------------------------
// ** Iterative Solution with Memoize **
// using an immediately invoked function to store the sequence in variable
//

var fibonaciIterative = (function () {
  var fibIt = [];
  fibIt[0] = 0;
  fibIt[1] = 1;

  for(var i = 2; i <= 10; i++){
    fibIt[i] = fibIt[i-2] + fibIt[i-1];
  }
  return fibIt;
})();

//console.log(fibonaciIterative);
