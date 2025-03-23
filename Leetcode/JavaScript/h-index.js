//// My solution ////
/////////////////////
// var hIndex = function (citations) {
//     const map = {};

//     for (i of citations) {
//         if (!map[i]) {
//             map[i] = 1;
//         } else {
//             map[i] += 1;
//         }
//     }

//     let max = 0;
//     console.log(map);
//     const set = Object.keys(map)
//         .sort((a, b) => b - a)
//         .map((a) => +a);
//     for (let i = 0; i < set.length; i++) {
//         console.log('i', i, 'map', map[set[i]], 'set', set[i]);
//         if (map[set[i]] >= set[i]) {
//             return set[i];
//         }
//         if (i == set.length - 1 || map[set[i]] >= set[i + 1]) {
//             return map[set[i]];
//         }
//         if (i < set.length) {
//             map[set[i + 1]] += map[set[i]];
//         }
//     }
// };

//// Better solution ////
var hIndex = function (citations) {
    citations.sort((a, b) => b - a);
    let i = 0;

    while (i < citations.length && i < citations[i]) {
        i++;
    }

    return i;
};

let actual;
let expected;

actual = hIndex([3, 0, 6, 1, 5]);
expected = 3;
console.log(actual, expected);

actual = hIndex([1, 3, 1]);
expected = 1;
console.log(actual, expected);

actual = hIndex([1, 3, 1, 6, 9, 1, 0, 3, 8, 2, 6, 3, 7, 1, 4, 8, 5, 7, 1, 2]);
expected = 6;
console.log(actual, expected);

actual = hIndex([100]);
expected = 1;
console.log(actual, expected);

actual = hIndex([0, 0, 2]);
expected = 1;
console.log(actual, expected);

actual = hIndex([0]);
expected = 0;
console.log(actual, expected);

actual = hIndex([0, 4, 4, 0, 4, 0, 0]);
expected = 3;
console.log(actual, expected);

actual = hIndex([1, 1, 3, 6, 7, 10, 7, 1, 8, 5, 9, 1, 4, 4, 3]);
expected = 6;
console.log(actual, expected);
