function isValid(s) {
    const chars = s.split('');
    const parentheses = []
    for (let char of chars) {
        if (char.match(/[\[\(\{]/)) {
            parentheses.push(char)
            continue;
        }
        if (char === ')' && parentheses.pop() !== '(') return false
        if (char === ']' && parentheses.pop() !== '[') return false
        if (char === '}' && parentheses.pop() !== '{') return false
    }
    return parentheses.length === 0;
}

let s = "([{}])"
let res = true

console.log(isValid(s),res)


s = "[(])"
res = false

console.log(isValid(s),res)

s="([)]"
res = false;
console.log(isValid(s),res)
