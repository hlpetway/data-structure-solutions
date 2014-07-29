//This is an example of a LinkedList constructor and how to use it to
//implement to check if a LinkedList is a palindrome.

"use strict";
var Node = function(data){
    this.data = data;
    this.next = null;
};

var LList = function(){
    this.head = new Node("head");
};

LList.prototype.find = function(item){
    var currNode = this.head;
    while(currNode.data !== item){
        currNode = currNode.next;
    }
    return currNode;
};

//this inserts after a found node
LList.prototype.insert = function(newData, item){
    var newNode = new Node(newData);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
};

LList.prototype.add = function(data){
    var newNode = new Node(data);
    var currNode = this.head;
    while(currNode.next !== null){
        currNode = currNode.next;
    }
    currNode.next = newNode;
};

LList.prototype.findPrevious = function(item){
    var currNode = this.head;
    while((currNode.next !== null) && (currNode.next.data !== item)){
        currNode = currNode.next;
    }
    return currNode;
};

LList.prototype.remove = function(item){
    var prevNode = this.findPrevious(item);
    if(prevNode.next !== null){
        prevNode.next = prevNode.next.next;
    }
};

LList.prototype.display = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.data);
    currNode = currNode.next;
  }
};


LList.prototype.isPalindrome = function() {
    var stack = [];
    var fast = this.head;
    var slow = this.head;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        stack.push(slow.data);
    }
    if( fast !== null){
        slow = slow.next;
    }
    while(slow.next !== null){
        var top = stack.pop();
        if(slow.data !== top){
            return false;
        }
        slow = slow.next;
    }
    return true;
};

var list = new LList();
list.add("o");
list.add("t");
list.add("t");
list.add("o");
list.display();
console.log(list.isPalindrome());

var seclist = new LList();
seclist.add("1");
seclist.add("2");
seclist.add("3");
seclist.add("2");
seclist.add("1");
seclist.display();
console.log(seclist.isPalindrome());
