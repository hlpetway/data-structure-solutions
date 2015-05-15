// Writing coding interview questions hasn't made me rich. Maybe trading Apple stocks will.
// I have an array stock_prices_yesterday where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500.

// Write an efficient algorithm for computing the best profit I could have made
// from 1 purchase and 1 sale of 1 Apple stock yesterday.
// No "shorting"—you must buy before you sell. (at least 1 minute must pass).

//------------------------------------------------------------------------------------------
//This loops through the entire array once. Time & Space Complexity O(N)

var bestProfitYesterday = function(array){
  var highest = 0;
  var lowest = 0;
  if(array[0] < array [1]){
    lowest = array[0];
    highest = array[1];
  }
  if(array[0] > array[1]){
    lowest = array[1];
    highest = array[0];
  }
  for(var i = 2; i < array.length; i++){
    if(array[i] < lowest){
      lowest = array[i];
    }
    if(array[i] > highest){
      highest = array[i];
    }
  }
  if(array.indexOf(lowest) < array.indexOf(highest)){
    var bestProfit = highest - lowest;
    console.log("Higest possible profit yesterday: " + bestProfit);
  }
};

var stockPricesYesterday = [400,200,300,600, 400, 500, 300,200];
bestProfitYesterday(stockPricesYesterday);
