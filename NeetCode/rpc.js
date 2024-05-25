function evalRPN2(tokens) {
    const numStack = []
    for (let token of tokens) {
        // if num, add to stack
        if (token.match(/\d/)) {
            numStack.push(+token);
            continue;
        } 
        // if operator, evaluate stack
        let total = numStack.shift();
        while (numStack.length > 0) {
            if (token === '+') {
                total += numStack.shift();
            } else if (token === '-') {
                total -= numStack.shift();
            } else if (token === '*') {
                total *= numStack.shift();
            } else if (token === '/') {
                total /= numStack.shift();
            }
        }
        numStack.push(total);
    }
    return numStack[0]
}

function evalRPN(tokens) {
    const numStack = []
    for (let token of tokens) {
        // if num, add to stack
        if (token.match(/\d/)) {
            numStack.push(+token);
            continue;
        } 
        // if operator, evaluate stack
        if (token === '+') {
            const val2 = numStack.pop();
            const val1 = numStack.pop();
            numStack.push(val1 + val2);
        } else if (token === '-') {
            const val2 = numStack.pop();
            const val1 = numStack.pop();
            numStack.push(val1 - val2);
        } else if (token === '*') {
            const val2 = numStack.pop();
            const val1 = numStack.pop();
            numStack.push(val1 * val2);
        } else if (token === '/') {
            const val2 = numStack.pop();
            const val1 = numStack.pop();
            numStack.push(parseInt(val1 / val2));
        }
    }
    return numStack[0]
}

let tokens = ["1","2","+","3","*","4","-"]
let res = 5;
console.log(evalRPN(tokens),res);

tokens=["4","13","5","/","+"]
res = 6;
console.log(evalRPN(tokens),res);
