function encode(strs) {
    let output = '';

    for (let str of strs) {
        output += `${str.length}#${str}`
    }
    return output;
}

function decode(strs) {
    const chars = strs.split('');
    let lenS = '';
    let len = 0;
    let isLen = true;
    let output = [];
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (isLen && char !== '#') {
            console.log('add to lenS',char)
            lenS += char
            continue;
        }
        if (isLen && char === '#') {
            console.log('converting to num',lenS)
            len = lenS === '0' ? 0 : +lenS;
            lenS = '';
            isLen = len === 0;
            output.push('');
            continue;
        }
        if (output[output.length - 1].length !== len) {
            console.log('adding to string',char)
            output[output.length - 1] = output[output.length - 1] + char
        } else {
            console.log('last char of string',char)
            len = 0
            isLen = true;
            i--
        }

    }
    return output;
}

let strs = ["neet","code","love","you"]

let res = ["neet","code","love","you"]

strs = ["","   ","!@#$%^&*()_+","LongStringWithNoSpaces","Another, String With, Commas"]
let encoded = encode(strs);
console.log(encoded);

console.log(decode(encoded))

