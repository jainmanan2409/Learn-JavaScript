// Simple Math Operations

const { blob } = require("stream/consumers");

const simpleMath = (a,b,op) => {
    if(op === '+'){
        return a+b;
    } else if(op === '-'){
        return a-b;
    } else if(op === '*'){
        return a*b;
    } else {
        return a/b;
    } 

}

console.log(simpleMath(5, 3, "+"));
console.log(simpleMath(5, 3, "-"));
console.log(simpleMath(5, 3, '*'));
console.log(simpleMath(5, 3, '/'));