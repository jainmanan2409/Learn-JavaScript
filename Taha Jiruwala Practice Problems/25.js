// Determine the Largest of Three Numbers

function findLargest (num1,num2,num3) {
    if(num1 > num2 && num1 > num3){
        return num1;
    } else if (num2 > num1  && num2 > num3){
        return num2;
    }
    return num3;
} 

console.log(findLargest(2,2,2));