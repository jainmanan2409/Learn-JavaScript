// Calculate Total Donations

function calculateTotalDonations (donations) {
    let sum = 0;
    for(let i=0; i <= donations.length - 1; i++){
        sum += donations[i];
    }
    return sum;
}

console.log(calculateTotalDonations([50, 75, 25, 100]));