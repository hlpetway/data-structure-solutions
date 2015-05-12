// Solving Fibonaci Recursively using Memoize
// I'm going to compare the recursive and recursive with memoize solutions and their performance.
// I will later compare Recursive-Memoize to Iteration

// ** Recursive with Memoize
/*
var fibonacci = (function() {
  var memo = {};

  function f(n) {
    var value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(n - 1) + f(n - 2);

      memo[n] = value;
    }

    return value;
  }

  return f;
})();

//console.log(fibonacci(f, 10));
*/


// --------------------------------------------------
// Recursive Without Memoize
//

var fibonaciSimple = function (length,counter) {
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  if (counter < length){
  fib[counter] = fib[counter-2] + fib[counter-1];
  counter++;
  console.log(counter);
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
/*
var fibonaci = (function () {
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for(var i = 2; i <= 10; i++){
    fib[i] = fib[i-2] + fib[i-1];
  }
  return fib;
})();

console.log(fibonaci);
*/
