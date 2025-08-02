let numbers = [2,4,5,5,543,54];

function add(...arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(add(...numbers));

// spread operator is (...) used to unpacks the elements
// allows an iterable such as an array, tuple or string to be expanded into seperate elements

const foods = ['pizza', 'pasta'];
const name = 'Manan';
console.log(...foods);
console.log([...name]);