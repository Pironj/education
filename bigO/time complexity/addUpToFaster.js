const performance = require('perf_hooks').performance;
// write a function that calculates the sum of all numbers 
// from 1 up to (and including) some number n 
// this time taking into consideration time 

// O(1) time complexity or constant time
// the below code always will only have 3 operations 
// 1 *, 1 +, 1 / ======= O(3)
// we simplify this to just O(1)

function addUpTo(n) {
  return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)