function lengthOfLongestSubstring(s) {
    const chars = s.split('');
    if (chars.length === 0) return 0;

    let maxLength = 1;
    let left = 0;
    // while (left < chars.length) {
        // set left pointer
        // add value at left to set
        const set = new Set();
        set.add(chars[left])
        // set right pointer
        let right = left + 1;
        while (right < chars.length) {
            // check if value at right is in set
            // console.log(left,right,chars[right],maxLength,set)
            while (set.has(chars[right])) {
                // If yes, set left point to right pointer
                // console.log('delete and step left')
                set.delete(chars[left])
                left++;
            }
            // If no, add to set and step pointer
            set.add(chars[right]);
            maxLength = Math.max(maxLength, right - left + 1)
            right++
        }
        // if (right >= chars.length) break;
    // }
    return maxLength;
}

let s = "zxyzxyz"
let res = 3
console.log(lengthOfLongestSubstring(s),res);

s = "xxx"
res = 1
console.log(lengthOfLongestSubstring(s),res);

s = "xxx12345678rr"
res = 10
console.log(lengthOfLongestSubstring(s),res);


s = "dvdf"
res = 3
console.log(lengthOfLongestSubstring(s),res);

s = "pwwkew"
res = 3
console.log(lengthOfLongestSubstring(s),res);
