// Given a string s and a dictionary of words dict,
// determine if s can be segmented into a space-separated sequence
// of one or more dictionary words.
//
// Does string="leetcode" include any of these words dict=["leet","code"]
//
// ** Word Break **
//----------------------------------------------------------------
// TODO: There's an issue with my nested for loop syntax. Fix this!

var wordBreak = function(string,dict){
  var containsWord = false;
  for(var i = 0; i< dict.length; i++){
    var wordLength = dict[i].length;
    for( var j = 0; j < string.length; j + wordLength){
      if(string.substring(j,j + wordLength) === dict[i]){
        console.log("I got here");
        containsWord = true;
        return containsWord;
      }
      else{
        return "No Match";
      }
    }
  }
  if(containsWord){
    console.log("There was a match!");
  }
};

exampleString = "codeleet";
exampleDict = ["leet","code"];

wordBreak(exampleString, exampleDict);


// ** Word Break Using IndexOf() **
//----------------------------------------------------------------
// Find out what indexOf() runs in for Big O
//

var wordBreakIndexOf = function(string,dict){
  var containsWord = false;
  for(var i = 0; i< dict.length; i++){
    if(string.indexOf(dict[i]) === -1){
      console.log("No Match");
    }
    else{
      containsWord = true;
      console.log("There was a match for: " + dict[i]);
    }
  }
};

exampleString = "codeleet";
exampleDict = ["leet","code"];

wordBreakIndexOf(exampleString, exampleDict);
