const performance = require('perf_hooks').performance;

// O(n) time complexity
// multiple for loops not nested results in O(n + n) operations for each unnested loop in the code
// we simplify this to just O(n). As n gets larger the multiple of n say O(5n) or O(10n) becomes irrelavent in the big picture

function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

let t1 = performance.now();
countUpAndDown(10);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)