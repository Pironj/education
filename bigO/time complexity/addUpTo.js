const performance = require('perf_hooks').performance;
// write a function that calculates the sum of all numbers 
// from 1 up to (and including) some number n

// O(n) time complexity
// Number of operations is (eventually) bounded by a multiple of n (say, 10n)
// the below code has a total of 5n + 2 operations
// 2 assignments (total = 0 & i = 1)
// 5n (<= comparison & i++ addition & assignment =+ i additional & aqssignment)

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)