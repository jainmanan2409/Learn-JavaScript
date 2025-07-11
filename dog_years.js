//practicing variables part 2

//converting my age to dog's age as they mature at faster rate than us humans

//dog's age can be calculated in dog years to account for their growth compared to a human of the same age/
//8 years in a human’s life equates to 45 years in a dog’s life 
/*

Here’s how you convert your age from “human years” to “dog years”:

1. The first two years of a dog’s life count as 10.5 dog years each.
2. Each year following equates to 4 dog years.
 
*/
// these are pure facts let the computer handle the math
// our main focus is practicing variables so don't burn out on the logic used.

const myAge = 21; // equals my age

let earlyYears = 2; 
earlyYears = earlyYears * 10.5; //refer 1st point

let laterYears = myAge - 2; //as the first two years are already been taken care of

laterYears = laterYears * 4; //refer 2nd pt.

console.log(`These are the early years = ${earlyYears} and later years = ${laterYears}.`)

const myAgeInDogYears = earlyYears + laterYears; //total human age in dog years

const myName = 'Manan'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

