// Counting Down the Seconds

const countdown = (seconds) => {
    let count = seconds + 1;

    while(count > 0){
        count--;
        console.log(`${count}`);
    }
    return `Time's Up!!`
}

console.log(countdown(8));