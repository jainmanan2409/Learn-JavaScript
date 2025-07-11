//practicing varaibles of javascript

const kelvin = 0; //stored the value of kelvin 
const celsius = kelvin - 273; //celsius is 273 degrees less than kelvin

let fahrenheit = celsius * (9/5) + 32; //logic of converting celsius to fahrenheit

fahrenheit = Math.floor(fahrenheit); //to round off the value to an integer

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//logic for converting celsius to newton scale

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`)