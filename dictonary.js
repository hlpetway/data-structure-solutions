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
//There's an issue where with forEachIn as descried by EloquentJS
Dictionary.prototype.each = function(action) {
  (this.values, action).each;
};

var definitions = new Dictionary({cat: "feline",
  dog: "canine",
  lizard: "reptile"});


console.log(definitions.contains("cat")); //True
console.log(definitions.contains("constructor")); //False

definitions.each(function(name, genus) {
  console.log(name, " is ", genus);
});
