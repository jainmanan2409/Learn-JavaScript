//Calculate the Power of a Number


function calculatePower(base, exponent) {
    let result = 1;
    let count = 0;
    while (count < exponent) {
        result *= base;
        count++;
    }
    return result;
}

console.log(calculatePower(2, 3)); // 8

//straight forward method

// function calculatePower(base, exponent){
//     return result ** exponent;
// }
