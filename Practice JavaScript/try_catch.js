//we use try... catch statements with async await functions to handle errors 
//above two functions are just the library for the code to run
//if you want to skip the try-catch statements scroll down to last function


//this functions returns to true for 20%
let randomSuccess = () => {
 let num = Math.random();
 if (num < .2 ){
   return true;
 } else {
   return false;
 }
};

const shopForCars = () => {
    return new Promise((resolve, reject) => {
        console.log('Which car to buy?');
        setTimeout(() => {
            console.log('I should buy a SUV!');
            setTimeout(() => {
                let success = randomSuccess();
                if(success){
                    console.log('I should go for a 4x4');
                    resolve('LandRover');
                } else {
                    reject('No reliable car found');
                }
            }, 1000);
        }, 1000);
    });
};

//main try-catch block

async function buyCar() {
    try{
        let car = await shopForCars();
        console.log(`Let's buy a ${car} then!!`);
    } catch(err) {
        console.log(err);
        console.log(`not planning to buy a car anymore!`);
    }
};

buyCar();