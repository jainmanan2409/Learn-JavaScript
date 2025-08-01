// Secure Communication Using Bitwise Operators

let data = 29;
let mask = 14;


let maskedData = data & mask; // AND operation
let classifiedData = data | mask; // OR 
let encryptedData = data ^ mask; // XOR
let hiddenData = ~data;
let codedDataLeft = data<<2;
let decodedDataRight = data>>2;

console.log(maskedData,classifiedData,encryptedData,hiddenData,codedDataLeft,decodedDataRight);