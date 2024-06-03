// function checkInclusion(s1, s2) {
//     const s1Map = new Map();
//     for (let s of s1.split('')) {
//         s1Map.set(s,s1Map.has(s) ? s1Map.get(s) + 1 : 1);
//     }
//     const countMap = new Map();
//     const chars = s2.split('');
//     let left = 0;
//     let right;
//     while (left < chars.length) {
//         if (!s1Map.has(chars[left])) {
//             left++
//             continue;
//         }
//         console.log('chars left', chars[left])
//         countMap.set(chars[left],1)
//         console.log(countMap, left)
//         for (let right = left + 1; right - left < s1.length; right++) {
//             console.log(right, chars[right])
//             if (!s1Map.has(chars[right]) || right >= chars.length) {
//                 break;
//             }
//             countMap.set(chars[right],countMap.has(chars[right]) ? countMap.get(chars[right]) + 1 : 1);
//             console.log(countMap)
//         }
//         // Check if all chars exist
//         let match = true;
//         for (let [key,val] of countMap.entries()) {
//             console.log(key, val)
//             if (s1Map.get(key) !== val) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) return true;
//         console.log(left, right)
//         countMap.clear();
//         left = right + 1;
//     }
//     return false;
// }
function checkInclusion(s1, s2) {
    const s1Chars = s1.split('');
    const s1Sorted = s1Chars.sort().join('');
    const chars = s2.split('')
    let left = 0; 
    let right = s1.length - 1;

    while (right < s2.length) {
        if (!s1Chars.includes(chars[right])) {
            left = right + 1;
            right = left + s1.length - 1;
            continue;
        }
        if (chars.slice(left, right + 1).sort().join('') === s1Sorted) return true
        left++
        right++
    }
    return false;
}
let s1 = "abc"
let s2 = "lecabee"
let res = true;

console.log(checkInclusion(s1, s2), res);

s1 = "cab"
s2 = "lecaaabee"
res = false;
console.log(checkInclusion(s1, s2), res);
