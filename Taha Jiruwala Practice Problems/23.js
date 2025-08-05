// Simple Math Operations

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