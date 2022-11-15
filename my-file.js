// Total number of months in dataset

var totalmonths = finances.length;

// Entire period net total amount of profit & losses

var netentireperiod = 0;
for (var i = 0; i < finances.length; i++) {
  netentireperiod += finances[i][1];
}

// avg changes overall ?
var avgprofitChange = [];
for (i = 0; i < finances.length; i++) {
  avgprofitChange[i] = finances[i][1];
}

// highest profit
var high = finances[avgprofitChange.indexOf(Math.max(...avgprofitChange))];
var arrayHigh = "Highest Profit: " + high[0] + " ($" + high[1] + ")";

// lowest profit
var loss = finances[avgprofitChange.indexOf(Math.min(...avgprofitChange))];
var arrayLoss = "Highest Loss: " + loss[0] + " ($ " + loss[1] + ")";

var monthlyChange = [];
for (i = 1; i < avgprofitChange.length; i++) {
  monthlyChange[i - 1] = avgprofitChange[i] - avgprofitChange[i - 1];
}

// Greatest Increase
var greatestInc = Math.max(...monthlyChange);
var profit = monthlyChange.indexOf(greatestInc) + 1;
var arraypro =
  "Greatest increase in Profits: " +
  finances[profit][0] +
  " {$ " +
  greatestInc +
  ")";

var decrease = Math.min(...monthlyChange);
var profitDecrease = monthlyChange.indexOf(decrease) + 1;
var arraydecrease =
  "Greatest decrease in Profits: " +
  finances[profitDecrease][0] +
  " {$ " +
  decrease +
  ")";

console.log(totalmonths);
console.log(netentireperiod);
console.log(avgprofitChange);
console.log(monthlyChange);
console.log(arrayHigh);
console.log(arrayLoss);
console.log(decrease);
