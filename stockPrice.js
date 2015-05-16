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
  var bestProfit = array[1]-array[0];
  var lowest = array[0];
  for(var i = 0; i < array.length; i++){
    var potential_profit = array[i] - lowest;
    bestProfit = Math.max(bestProfit, potential_profit);
    lowest = Math.min(lowest, array[i]);
  }
  console.log("Higest possible profit yesterday: " + bestProfit);
  return bestProfit;
};

var stockPricesYesterday = [1000,400,200,300,600,2000,100,400,500,300,200];
bestProfitYesterday(stockPricesYesterday);

//We've got an issue with 200 being skipped. Because of 1000. Fix this!
