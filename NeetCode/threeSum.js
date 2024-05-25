// function threeSum(nums) {
//     nums.sort((a, b) => a - b);
//     console.log(nums)
//     let left = 0;
//     let right = nums.length - 1;
//     const output = []
//     while (left + 1 < right) {
//         let mid;
//         if (Math.abs(nums[left]) < Math.abs(nums[right])) {
//             mid = left + 1;
//             const sum = nums[left] + nums[mid] + nums[right];
//             while (mid < right) {
//                 if (sum === 0) {
//                     output.push([nums[left],nums[mid],nums[right]]);
//                     break
//                 } else if (sum < 0) {
//                     left++
//                     break
//                 } else {
//                     mid++
//                 }
//             }
//             right--
//         } else if (Math.abs(nums[left]) > Math.abs(nums[right])) {
//             mid = right - 1;
//             const sum = nums[left] + nums[mid] + nums[right];
//             while (mid > left) {
//                 if (sum === 0) {
//                     output.push([nums[left],nums[mid],nums[right]]);
//                     break
//                 } else if (sum > 0) {
//                     right++
//                     break
//                 } else {
//                     mid--
//                 }
//             }
//             left++
//         } else {
//             mid = left + 1;
//             while (mid < right) {
//                 if (nums[mid] === 0) {
//                     output.push([nums[left],nums[mid],nums[right]]);
//                     break
//                 } else {
//                     mid++
//                 }
//             }
//             right--
//         }
//     }
    
//     for (let i = 1; i < output.length;) {
//         if (output[i][0] === output[i-1][0] && output[i][1] === output[i-1][1] && output[i][2] === output[i-1][2]) {
//             output.splice(i,1);
//             continue;
//         }
//         i++
//     }
//     return output
// }

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums)
    const output = [];
    let left = 0;
    while (nums[left] <= 0) {
        let right = nums.length - 1;
        while (nums[right] >= 0) {
            let mid;
            console.log('left + right',nums[left] + nums[right],'left',left,'right',right)
            mid = right - 1;
            while (mid > left) {
                const sum = nums[left] + nums[mid] + nums[right];
                console.log('sum',sum,'left',left,'mid',mid,'right',right)
                if (sum === 0) {
                    let exists = false;
                    for (let i = 0; i < output.length; i++) {
                        if (output[i][0] === nums[left] && output[i][1] === nums[mid] && output[i][2] === nums[right]) {
                            exists = true;
                        }
                    }
                    if (!exists) output.push([nums[left],nums[mid],nums[right]]);
                    break
                } else {
                    mid--
                }
            }
            right--
        }
        left++
    }

    return output
}

let nums = [-1,0,1,2,-1,-4];
let res = [[-1,-1,2],[-1,0,1]];
// console.log(threeSum(nums), res)

nums=[-2,0,1,1,2]
res = [[-2,0,2],[-2,1,1]]
// console.log(threeSum(nums), res)

nums=[-1,0,1,2,-1,-4,-2,-3,3,0,4]
res=[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]];
console.log(threeSum(nums), res)
