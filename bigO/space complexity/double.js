const performance = require('perf_hooks').performance;

// O(N) space complexity
// the function below uses an array data type which is O(N) space complexity
// <===== RULE of THUMB ====>
// Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

let t1 = performance.now();
double(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)