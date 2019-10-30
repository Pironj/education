This repo is to better understand Big O with some helpful examples.

## What is Big O:

Big O Notation is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
```
f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n  )
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different!
```
Analyzing complexity with big O can get complicated
There are several rules of thumb that can help
These rules won't ALWAYS work, but are a helpful starting point

## Rules of Thumb
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop