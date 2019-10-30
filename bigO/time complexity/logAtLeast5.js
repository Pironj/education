const performance = require('perf_hooks').performance;

// function that will count at a minimum of 5 regardless of the input size.
// input of 2 will count to 5 still

// O(n) time complexity
// runtime is directly proportional with n. As n gets larger the runtime increases.

function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

let t1 = performance.now();
logAtLeast5(1000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)