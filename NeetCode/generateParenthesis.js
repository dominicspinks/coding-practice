function generateParenthesis(n) {
    if (n === 0) return [];
    const output = [[1,1,'(']];
    for (let i = 1; i < n * 2; i++) {
        for (let j = 0; j < output.length; j++) {
            if (output[j][0] === 0) {
                output[j] = [1, output[j][1] + 1, output[j][2] + '(']
                continue;
            }
            if (output[j][1] === n) {
                output[j] = [output[j][0] - 1, output[j][1], output[j][2] + ')']
                continue;
            }
            output.splice(j,1,[output[j][0] + 1, output[j][1] + 1, output[j][2] + '('],[output[j][0] - 1, output[j][1], output[j][2] + ')'])
            j++
        }
    }
    return output.map((set) => set[2])
}

let n = 1;
let res = ['()'];

console.log(generateParenthesis(n),res)

n = 3;
res = ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(n),res)
