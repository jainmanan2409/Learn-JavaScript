// Calculate the Average of Three Numbers

const calculateAverage = (num1, num2, num3) => {
    let sum = num1+num2+num3;
    let average = sum/3;
    return average;
} 

console.log(calculateAverage(10,20,30));