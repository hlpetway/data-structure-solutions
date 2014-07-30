// Practicing Closure
// Using Immediately Invoked Function

"use strict";

var close = (function () {
  var a = 1;
  return function () {
    console.log(a); // 1
  };
})();

close();

var arr4 = [];
arr4.push("me");
console.log(arr4);
