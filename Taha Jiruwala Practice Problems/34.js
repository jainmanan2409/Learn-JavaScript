// Counting Magical Crystals

const countCrystals = (crystals, color) => {
    return crystals.filter((col) => col === color ).length;
}

console.log(countCrystals( ["blue", "blue", "blue", "blue", "blue"],  "blue"));

console.log(countCrystals( ["green", "blue", "blue", "green", "blue"],  "green"));