// Using OOP to model a dictionary

"use strict";

function Dictionary(startValues) {
  this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
  this.values[name] = value;
};
Dictionary.prototype.lookup = function(name) {
  return this.values[name];
};
Dictionary.prototype.contains = function(name) {
  return Object.prototype.hasOwnProperty.call(this.values, name) &&
  Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function(action) {
  this.each(this.values, action);
};

var definitions = new Dictionary({cat: "feline",
  dog: "canine",
  lizard: "reptile"});


console.log(definitions.contains("cat"));
console.log(definitions.contains("constructor"));

definitions.each(function(name, colour) {
  console.log(name, " is ", colour);
});
