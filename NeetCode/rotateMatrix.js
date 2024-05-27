function rotate(matrix) {
    const lenI = matrix.length - 1
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        // console.log('i', i);
        for (let j = 0; j < lenI - 2 * i; j++) {
            // console.log('j', j);
            let val0 = matrix[i][i + j];
            // console.log(val0);
            let val1 = matrix[i + j][lenI - i]
            
            // Set right
            matrix[i + j][lenI - i] = val0;
            val0 = val1;
            // console.log(val0);
            val1 = matrix[lenI - i][lenI - j - i]
            // Set bottom
            matrix[lenI - i][lenI - j - i] = val0;
            val0 = val1;
            // console.log(val0);
            val1 = matrix[lenI - j - i][i]
            // Set left
            matrix[lenI - j - i][i] = val0;
            // Set top
            // console.log(val1);
            matrix[i][i + j] = val1;
        }
    }
}

let matrix = [
    [1,2],
    [3,4]
  ]
console.log(matrix[matrix.length - 1][matrix.length - 1])
let res = [
    [3,1],
    [4,2]
];
rotate(matrix)
console.log(matrix, res)

matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
res = [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
rotate(matrix)
console.log(matrix, res)

matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ]
  res = [
    [13,9,5,1],
    [14,10,6,2],
    [15,11,7,3],
    [16,12,8,4]
  ]
  rotate(matrix)
  console.log(matrix, res)
  
matrix = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
  ]
  res = [
    [21,16,11,6,1],
    [22,17,12,7,2],
    [23,18,13,8,3],
    [24,19,14,9,4],
    [25,20,15,10,5]
  ]
  rotate(matrix)
  console.log(matrix, res)