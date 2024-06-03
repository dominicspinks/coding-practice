function characterReplacement(s, k) {

    let left = 0;
    let right = 0;
    let maxLength = 1;
    let kCount = 0;
    let leftStop = 0;
    while (right < s.length) {
        if (s[right] === s[left]) {
            maxLength = Math.max(right - left + 1, maxLength);
            right++
            continue;
        }
        if (kCount === k) {
            kCount = 0;
            left = leftStop === left ? left + 1 : leftStop;
            leftStop = left;
            right = left;
            continue;
        }
        leftStop = leftStop !== left ? leftStop : right;
        kCount++
        maxLength = Math.max(right - left + 1, maxLength);
        right++
    }
    return maxLength;
}
// Not working if starting char is not the max len char.

// function characterReplacement(s, k) {
//     let res = 0;
//     const count = new Map();
//     let l = 0;

//     for (let r = 0; r < s.length; r++) {
//         let len = r - l + 1;
//         count.set(s[r], 1 + (count.get(s[r]) || 0));

//         if (len - Math.max(...count.values()) > k) {
//             count.set(s[l], count.get(s[l]) - 1);
//             l++;
//         }
//         len = r - l + 1;
//         res = Math.max(res, len);
//     }

//     return res;
// }

let s = "XYYX"
let k = 2;
let res = 4;
console.log(characterReplacement(s,k),res);

s = "AAABBABB"
k = 1
res = 5;
console.log(characterReplacement(s,k),res);

s = "CDBBAAAA"
k = 3;
res = 7;
console.log(characterReplacement(s,k),res);