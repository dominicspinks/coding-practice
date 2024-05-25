var isPalindrome = function(s) {
    const chars = s.toLowerCase().split('')
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        if (!chars[left].match(/[a-z\d]/i)) {
            left++
            continue;
        }
        if (!chars[right].match(/[a-z\d]/i)) {
            right--
            continue;
        }
        if (chars[left] !== chars[right]) return false
        left++
        right--
    }

    return true
};

let s = "A man, a plan, a canal: Panama"
let res = true

console.log(isPalindrome(s),res)

s = "race a car"
res =  false

console.log(isPalindrome(s),res)

Input: s = " "
res =  true

console.log(isPalindrome(s),res)

Input: s = "0P"
res =  false

console.log(isPalindrome(s),res)