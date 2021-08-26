/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0
    let min = prices[0]
    let max = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
            max = prices[i]
        }
        if (prices[i] > min) {
            max = prices[i]
        }
        if (max - min > total) {
            total = max - min
        }
    }
    return total
};