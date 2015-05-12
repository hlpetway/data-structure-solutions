// Solving Fibonaci Recursively using Memoize
// I'm going to compare the recursive and recursive with memoize solutions and their performance.
// I will later compare Recursive-Memoize to Iteration
// ----------------------------------------------------------
// ** Recursive with Memoize
// Returns just the single value n

var fibonacci = (function (  ) {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n-1) + fib(n-2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}( ));

console.log(fibonacci(5));

// --------------------------------------------------
// ** Recursive Without Memoize **
// TODO: Why does this only print the first two values?

var fibonaciSimple = function (length,counter) {
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  if (counter < length){
  fib[counter] = fib[counter-2] + fib[counter-1];
  counter++;
  return fibonaciSimple(length,counter);
  }
  else
  return fib;
};

console.log(fibonaciSimple(6,2));

// --------------------------------------------------
// ** Iterative Solution **
// using an immediately invoked function to store the sequence in variable
//

var fibonaciIterative = (function () {
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for(var i = 2; i <= 10; i++){
    fib[i] = fib[i-2] + fib[i-1];
  }
  return fib;
})();

console.log(fibonaciIterative);
