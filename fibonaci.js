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


//returning and storing the sequence in the function as a variable.
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
