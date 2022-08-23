/**
 You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */


//brute force - 0(n2)
/*
function maxProfit(prices){
  let profit = 0;
  for (let buy = 0; buy < prices.length; buy++) {
   for (let sell = buy + 1; sell < prices.length; sell++) {
      let tradeProfit = prices[sell] - prices[buy];
      if(tradeProfit > profit) profit = tradeProfit
   }
 }
 return profit;
}
*/

//O(n) -  Space complexity: (1)

/*
1. Determine sliding window: in this case is 2 because we are searching for the difference between 2 numbers
2. Determine sliding criteria:
if(left num is greater than right num, slide by 1)

 */
function maxProfit(prices){
  let [left, right, max] = [0, 1, 0]
  while(right < prices.length){
    if(prices[right] <= prices[left]){
      left = right;
    }
    let profit = prices[right] - prices[left]
    if(profit > max) max = profit;
    right++
  }
  return max;
}
console.log(maxProfit([7,1,5,3,6,4]))
