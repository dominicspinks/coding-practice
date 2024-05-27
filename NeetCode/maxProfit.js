function maxProfit(prices) {
    let left = 0;
    let right = 1;
    let max = 0;
    while (right < prices.length) {
        // console.log(left, right)
        max = Math.max(max,prices[right] - prices[left]);
        if (left === right) {
            right++
            continue;
        }
        if (prices[right] <= prices[left] || right === prices.length - 1) {
            left++
            continue;
        }
        right++
    }
    return max;
}

// let prices = [10,1,5,6,7,1]
// let res = 6;
// console.log(maxProfit(prices),res);

// prices = [10,8,7,5,2]
// res = 0;
// console.log(maxProfit(prices),res);


prices = [1,2,76,3,7,10,8,7,77,5]
res = 0;
console.log(maxProfit(prices),res);