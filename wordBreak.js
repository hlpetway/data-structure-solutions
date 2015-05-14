// Given a string s and a dictionary of words dict,
// determine if s can be segmented into a space-separated sequence
// of one or more dictionary words.
//
// Does string="leetcode" include any of these words dict=["leet","code"]
//
// ** Word Break **
//----------------------------------------------------------------

var wordBreak = function(string,dict){
  wordsInString = [];
  for(var i = 0; i< dict.length; i++){
    wordLength = dict[i].length;
    stringSize %= string.length/wordLength;
    for( var j = 0; j < stringSize; j+wordLength){
      if(string.substring(j,wordLength) === dict[i]){
        wordsInString[i[j]] = true;
        break;
      }
      wordsInString[i[j]] = false;
    }
    for(var k = 0; k<wordsInString.length; k++){

      // TODO:
      // This is answering if any of the words in the string are words in the dictionary.
      // The question is can the string be segemented into a sequence of the dict words.
      // I need to rethink this approach.
      // Maybe compare each of the dictionary words to the string by substrings of the same size.
      // Iterate through the dict and if all words show up then return true.
      // or track state of true false in a variable and return that if at least one dict word
      // matches a substring.
    }
  }
};
