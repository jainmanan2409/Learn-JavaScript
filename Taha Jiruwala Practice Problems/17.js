// Local and Outer Variables

//local
const showMessage = () => {
    let message = 'Hello';
    console.log(message);
}
showMessage();

//outer

const userName = 'John';
const showMessage2 = () => {
    let message = 'Hello';
    console.log(message + ` ${userName}`);
}

showMessage2();

//Local Variable Shadowing

const userName1 = 'John';
const showMessage3 = () => {
    let userName1 = 'Martin';
    let message = 'Hello';
    console.log(message + ` ${userName1}`);
}

showMessage3(); //Call the function to display the message and see how the local variable shadows the outer one.