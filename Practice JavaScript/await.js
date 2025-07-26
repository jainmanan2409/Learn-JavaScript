// The await keyword can only be used inside an async function
// await halts or pauses the execution of our async function until a given promise is resolved.

const shopForCars = () => {
    return new Promise((resolve, reject) => {
        console.log('Which car to buy?');
        setTimeout(() => {
            console.log('I should buy a SUV!');
            setTimeout(() => {
                console.log('I should go for a 4x4');
                resolve('LandRover');
            }, 1000);
        }, 1000);
    });
};

const buyCar = async () => {
    let resolvedValue = await shopForCars(); // here the await keyword halts, pauses the execution of our function for the above the promise function to resolved first.
    console.log(`Let's buy a ${resolvedValue}!!`);
};

buyCar();