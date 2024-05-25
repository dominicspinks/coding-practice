function maxArea(heights) {
    let left = 0;
    let maxHeight = 0;
    for (let left = 0; left < heights.length - 1; left++) {
        let right = heights.length - 1;
        if (left > 0 && heights[left] <= heights[left - 1]) continue;

        for (let right = heights.length - 1; right > left; right--) {
            const height = Math.min(heights[left],heights[right]) * (right - left)
            if (height > maxHeight) maxHeight = height;
        }
    }
    return maxHeight;
}

function maxArea2(heights) {
    let left = 0;
    let right = heights.length - 1;
    let res = 0;

    while (left < right) {
        const containerLength = right - left;
        const area =
            containerLength * Math.min(heights[left], heights[right]);
        res = Math.max(res, area);
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return res;
}

let height = [1,6,22,5,4,7,3,7]
let res = 36
console.log(maxArea(height),res)
console.log(maxArea2(height),res)

height = [2,2,2]
res = 4
console.log(maxArea(height),res)
console.log(maxArea2(height),res)
