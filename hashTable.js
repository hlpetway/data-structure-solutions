// This is an example of a HashTable with a simple Hash Function
// and a Linked List for collisions. Values are distributed more
// uniformly in a hash table if the size of the table is a prime number.
//
// ** Hash Table with Linked List for Collisions **
//

var Node = function(key,value) {
  this.key = key;
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this.head = new Node('head');
  this.add = function(key,value) {
    var node = new Node(key,value);
    var curNode = this.head;
    while(curNode.next !== null) {
      curNode = curNode.next;
    }
    curNode.next = node;
  };
  this.find = function(key){
    var curNode = this.head;
    while(curNode.key !== key && curNode.next !== null){
      curNode = curNode.next;
    }
    return curNode.value;
  };
};

var HashTable = function(max) {
  this.max = max;
  this.storage = [];
  for (var i = 0; i < max; ++i) {
    this.storage[i] = new LinkedList();
  }
  this.hash = function(key) {
    var sum = 0;
    for (var i = 0; i < key.length; ++i) {
      sum += key[i].charCodeAt() - 97;
    }
    return sum % this.max;
  };
  this.addValue = function(key,value) {
    var index = this.hash(key);
    this.storage[index].add(key,value);
  };
  this.getValue = function(key) {
    var index = this.hash(key);
    return this.storage[index].find(key);
  };
};

var hash = new HashTable(5);
hash.addValue("I");
hash.addValue("would");
hash.addValue("like");
hash.addValue("a");
hash.addValue("coffee");
hash.getValue('I');
