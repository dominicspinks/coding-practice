function trap(height) {
    let volume = 0;
    let left = 0;
    let right;
    while (left < height.length - 1) {
        // find starting point:
        while (left < height.length - 1) {
            if (height[left] > height[left + 1]) {
                break
            }
            left++
        }
        console.log('left',left);
        // find end of trough
        right = left + 1;
        let bot = false;
        while (right < height.length - 1) {
            if (bot && height[right] > height[right + 1]) {
                break
            }
            if (!bot && height[right] < height[right + 1]) {
                bot = true;
            }
            right++
        }
        console.log('right',right);
        if (!bot) break;

        // confirm current end is not a false tip
        if (height[right] < height[left]) {
            let right0 = right + 1
            while (right0 <= height.length) {
                if (height[right0] >= height[left]) {
                    right = right0; 
                    break
                };
                right0++
            }
        }
        console.log('new right',right);
        
        const localMax = Math.min(height[left], height[right]);
        console.log('localmax',localMax)
        left++
        while (left < right) {
            volume += Math.max(0,localMax - height[left])
            left++
            console.log('volume',volume)
        }
    }
    return volume;
}

let height = [0,2,0,3,1,0,1,3,2,1]
let res = 9;
// console.log(trap(height),res);

height=[4,2,0,3,2,5]
res = 9;
// console.log(trap(height),res);

height=[6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3]
res = 83;
console.log(trap(height),res);
