// Solving Fibonacci Recursively using Memoize
//
// I'm going to compare the recursive, iterative and memoize solutions' performance.
// http://jsperf.com/fibonaccimemoizecomparison
// The performance difference is huge as you compute larger and larger numbers.
//
// RESOURCE: http://www.sitepoint.com/implementing-memoization-in-javascript/
// ----------------------------------------------------------
// ** Recursive with Memoize Solution: Find Nth Number in Fib Series **
// I'm using an immediately invoked function to store the sequence in variable.
// Returns just the single value n.

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

fibonacci(10);



// --------------------------------------------------
// ** Recursive Without Memoize Solution: Find Nth Number in Fib Series **
// Returns just the single value n.

function fibSimple(x) {
    if (x === 0) {
        return 0;
    } else if (x === 1) {
        return 1;
    } else {
        return fibSimple(x-1)+fibSimple(x-2);
    }
}
fibSimple(10);



// --------------------------------------------------
// ** Iterative Fibonacci Series with Memoize **
// I'm using an immediately invoked function to store the sequence in variable.
// http://jsperf.com/fibonaccirecursivevsiterative/2
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

console.log(fibonaciIterative);



// --------------------------------------------------
// ** Recursive Fibonacci Series with Memoize **
// I'm using an immediately invoked function to store the sequence in variable,
// and to keep variables out of global namespace.
// http://jsperf.com/fibonaccirecursivevsiterative/2
// BLISTERINGLY FAST! WHOA!

var fibonaciSeriesImmInvoked = (function () {

  var fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;

  var fibFunct = function (counter, length){
    if (counter <= length){
      fibArray[counter] = fibArray[counter-2] + fibArray[counter-1];
      counter++;
      return fibonaciSeriesImmInvoked(counter,length);
    }
    else
      return(fibArray);

  };
  return fibFunct;

})();

console.log(fibonaciSeriesImmInvoked(2,10));
