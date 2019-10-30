const performance = require('perf_hooks').performance;

// function that will count a maximum of 5 regardless of the input size.
// input of 2 will count to 5 
// input of 10000000 will still count to 5

// O(1) time complexity
// runtime is directly proportional with n. Here we use Math.min which sets the max of n to be 5 regardless of the size of n.
// this results with a constant time complexity as the size of n does not affect the runtime big picture.
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

let t1 = performance.now();
logAtMost5(1000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)