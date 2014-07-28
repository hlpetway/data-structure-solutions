//This is an example of a HashTable with a simple Hash Function and a Linked List for collisions.
//Values are distributed more uniformly in a hash table if the size of the table is a prime number.

var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.add = function(value) {
    var node = new Node(value);
    if (this.head === null) { this.head = node; }
    if (this.tail !== null) { this.tail.next = node; }
    this.tail = node;
  };
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};

var HashTable = function(max) {
  this.max = max;
  this.storage = [];
  for (var i = 0; i < max; ++i) {
    this.storage[i] = new LinkedList();
  }
  this.hash = function(value) {
    var sum = 0;
    for (var i = 0; i < value.length; ++i) {
      sum += value[i].charCodeAt() - 97;
    }
    return sum % this.max;
  };
  this.add = function(value) {
    var index = this.hash(value);
    this.storage[index].add(value);
  };
};

var hash = new HashTable(5);
hash.add('i');
hash.add('would');
hash.add('like');
hash.add('a');
hash.add('coffee');
