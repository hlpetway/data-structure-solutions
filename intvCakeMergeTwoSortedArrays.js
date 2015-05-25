// ** InterView Cake's Merge Two Sorted Arrays **
// https://www.interviewcake.com/question/merge-sorted-arrays

var myArray = [2,3];
var aliceArray = [1,2,3,4];

var printMergedArray = function (myArray, aliceArray){
  var mergedLength = myArray.length + aliceArray.length;
  var merged = [];
  var currentIndexAlice = 0;
  var currentIndexMine = 0;
  var currentIndexMerged = 0;

  while(currentIndexMerged < mergedLength){

    isMyArrayEmpty = currentIndexMine >= myArray.length;

    isAliceArrayEmpty = currentIndexAlice >= aliceArray.length;

    if(!(isMyArrayEmpty && isAliceArrayEmpty) && myArray[currentIndexMine] > aliceArray[currentIndexAlice]){
      merged[currentIndexMerged] = aliceArray[currentIndexAlice];
      currentIndexAlice++;
      currentIndexMerged++;
    }
    if(!(isMyArrayEmpty && isAliceArrayEmpty) && myArray[currentIndexMine] < aliceArray[currentIndexAlice]){
      merged[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;
      currentIndexMerged++;
    }
    if(!(isMyArrayEmpty && isAliceArrayEmpty) && myArray[currentIndexMine] === aliceArray[currentIndexAlice]){
      merged[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine += 1;
      currentIndexMerged += 1;
      merged[currentIndexMerged] = aliceArray[currentIndexAlice];
      currentIndexAlice += 1;
      currentIndexMerged += 1;
    }
    if(isAliceArrayEmpty){
      merged[currentIndexMerged] = myArray.slice(currentIndexMine);
    }
    if(isMyArrayEmpty){
      var newArray = merged.concat(aliceArray.slice(currentIndexAlice));
      merged = newArray;
      currentIndexMerged += 1;
    }
  }
  console.log(merged);
  return merged;
};

printMergedArray(myArray,aliceArray);
