const performance = require('perf_hooks').performance;

// O(n^2) time complexity
// O(n) operation inside of an O(n) operation.
// nesting for loops results in O(n * n) for each nested loop operation

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

let t1 = performance.now();
printAllPairs(23);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)