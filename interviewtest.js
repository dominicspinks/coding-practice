// Write a function that tests if a string contains words from a predefined list
function containsString(str, arr) {
    // loop through arr
    for (let val of arr) {
        // test if the val in the array matches the string
        if (val === str) return true;
    }
    return false;
}

console.log(containsString('input', ['input']));
