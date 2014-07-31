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
