const performance = require('perf_hooks').performance;

// O(1) constant space complexity
// the function below uses 2 numbers which is O(1) constant time
// <===== RULE of THUMB ====>
// Most primitives (booleans, numbers, undefined, null) are constant space
function sum(arr) {
  // total = 0 ---> 0(1) space complexity
  let total = 0;
  // i = 0 ---> o(1) space complexity
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

let t1 = performance.now();
sum(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)