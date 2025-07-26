//with the new ES 8 Javascript allows us to handle asynchronous functions with more ease with new async... await syntax
// it is basically a new syntax for using promises and generators


// async functions always returns a promise if it does not then it return undefined or it will return a promise resolved to that 
// non promise value.
async function fiveReturn () {
    return 5; // non promise value
}

fiveReturn().then(resolvedValue => {
    console.log(resolvedValue);
});


//another example
async function checkZeroFunc(num) {
    if(num === 0){
    return('zero');
    } else {
    return('not zero');
    }
}

checkZeroFunc(23).then((value) => {
    console.log(`The function resolved to this: ${value}`);
})