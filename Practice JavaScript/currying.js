// Currying is a functional programming technique that makes code
// more modular, reusable, and easier to test.
// It works by breaking down a function that takes multiple arguments
// into a series of functions that each take one argument.


// traditional function

function addTwoNumbers(a,b) {
    return a + b; // this is the normal syntax which returns unindentified when only one argument is passed.
}

// Calling with both arguments works fine:
console.log(addTwoNumbers(3, 4)); // 7

// But calling with only one argument gives NaN (not undefined):
console.log(addTwoNumbers(3)); // NaN (because b is undefined)

// so we use currying to make this code work at every step 

function curried_add(a){
    return function nestedFunc(b){
        return a + b; // 'a' is remembered by closure
    }
}
//we can call it in steps
let addOne = curried_add(1);
console.log(addOne(44)); // this will add 1 to 44 and return 45


// arrow function syntax of curried add is

let curry_add = a => b => a + b;
let addFive = curry_add(5);
console.log(addFive(10)); // 15


// this I have just used a smaller example for your learning. find heavy and major examples on MDN webdocs, etc.