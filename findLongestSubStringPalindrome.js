//Finding the longest palindromic substring is a classic problem of coding interview.

// ** Finding Longest SubString Palindrome of a given String
// This solution handles odd and even strings gracefully in O(N^2) Time and O(1) Space
// RESOURCE: http://stevekrenzel.com/articles/longest-palnidrome
// -- Manacher's Algo Solves this in O(N):
// http://articles.leetcode.com/2011/11/longest-palindromic-substring-part-ii.html

var exampleString = "dabcba";

var longestPalindrome = function (string) {
  if(string.isEmpty){
    return null;
  }
  else if(string.length === 1){
    return exampleString;
  }
  var longest = string.substring(0,1);
  for(var i = 0; i< string.length; i++){
    var temp = helper(string, i, i);
    if(temp.length > longest.length){
      longest = temp;
    }
    temp = helper (string,i,i+1);
    if(temp.length > longest.length){
      longest = temp;
    }
  }
  if (longest.length === 1){
    return "There is no palidrome substring in: " + string;
  }
  return longest;
};

var helper = function(string,begin,end){
  while((begin >= 0) && (end <= string.length-1) && (string.charAt(begin) === string.charAt(end))){
    begin--;
    end++;
  }
  return string.substring(begin+1,end);
};

longestPalindrome(exampleString);

//----------------------------------------------------------------------------------------
// Manacher's Solution
// First insert a character betweeen each letter and then we test each position to see how big the
// palindrome centered around that point is and store that number in an array P.
// Then search the array for the center with the largest palindrome centered around it.
// TODO: troubleshoot this

var prepString = function (string){
  if (string.length === 0){
    return "^$";
  }
  var funkyString = "^";
  for (var i = 0; i< string.length; i++){
    funkyString += "#" + string.substring(i,i+1);
  }
  funkyString += "#$";
  console.log(funkyString);
  return funkyString;
};

var test = "abba";
var newStringToTest = prepString(test);

var manLongestPalindrome = function (preppedString) {
  var P = [];
  var C = 0;
  var R = 0;
  for (var k=1; k<preppedString.length; k++){
    var k_mirror = 2*C-1;

    P[k] = (R > k) ? Math.min(R-k, P[k_mirror]) : 0;

    //Attempt to expand palindrome centered at i
    while (preppedString[k + 1 + P[k]] === preppedString[k - 1 - P[k]]){
      P[k]++;

      //If palindrome cetnered at i expand past end,
      // adjust center based on expanded palindrome
      if (k + P[k] > R){
        C = k;
        R = k + P[k];
      }
    }
  }

  // Find the maximum element in P.
  var maxLen = 0;
  var centerIndex = 0;
  for (var j = 1; j < preppedString.length-1; j++){
    if (P[j] > maxLen) {
      maxLen = P[j];
      centerIndex = j;
    }
  }
  return preppedString.substring((centerIndex - 1 - maxLen)/2, maxLen);
};

console.log(manLongestPalindrome(newStringToTest));
