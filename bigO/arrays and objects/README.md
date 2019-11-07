# Big O of Arrays and Objects

## Objectives
- Understand how objects and arrays work, through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods

## Objects
- Are **unordered, key value pairs!**
```
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
```
## When to Use Objects
- When you don't need order
- When you need fast access / insertion and removal

## Big O of Objects
```
Insertion -   O(1)

Removal -   O(1)

Searching -   O(N)

Access -   O(1)
```
## Big O of Object Methods
```
Object.keys -   O(N) 
- returns array of the keys in the object

Object.values -   O(N) 
- returns array of the values in the object

Object.entries -   O(N) 
- returns array of the keys & values of the object

hasOwnProperty -   O(1) 
- returns value of the property of the object in constant time
```

## Arrays
- Are **Ordered lists!**
```
let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];
```
## When to Use Arrays
- When you need order
- When you need fast access / insertion and removal (sort of....)

## Big O of Arrays
```
Insertion -   It depends.... 
  If inserting at the end using push() = O(1).
  If inserting to the beginning using unshift() = O(N)
  The reason is because need to adjust index for the rest of the array elements as the first element in the original array is no longer index of 0.

Removal -   It depends....
  For the same reason as insertion removing from the end is O(1) while removing from the beginning is O(N).

Searching -   O(N)

Access -   O(1) - common misconception if you have a valid index of an array element, you can jump right to that element in O(1) constant time no matter how large the array may be
```

## Big O of Array Methods
```
push -   O(1) - add to end of array
pop -   O(1) - remove from end of array
shift -   O(N) - remove from beginning of array
unshift -   O(N) - add to beginning of array
concat -   O(N) - creates new array by merging/joining 2 arrays
  ex: array1.concat(array2)
slice -   O(N) - removes a piece of an array and creates a new array. can take 2 arguments and works on indices
  ex array1.slice(1,2)
splice -   O(N) - depending on the arguments passed can either add new elements to a defined position of an array or remove elements from a defined position of an array.
Does not leave holes
can take multiple parameters
  ex: array1.splice(0,1) 0 defines the index/position; 1 defines how many elements to remove after the defined index/position
sort -   O(N * log N)
forEach/map/filter/reduce/etc. -   O(N)
```