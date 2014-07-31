"use strict";

//generating the fibonaci sequence in JS
var fibonaci = function (length) {
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for(var i = 2; i <= length; i++){
    fib[i] = fib[i-2] + fib[i-1];
  }
  return fib;
};

console.log(fibonaci(10));


//using an immediately invoked function to store the sequence in variable
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


// Generating the Fibonacci sequence using memoize
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

console.log(fibonacci(f, 10));
