// Practicing closure using an immediately invoked function.
// This stores the closure and a reference to the variable a in
// our variable close.

"use strict";

var close = (function () {
  var a = 1;
  return function () {
    console.log(a); // 1
  };
})();

close();
