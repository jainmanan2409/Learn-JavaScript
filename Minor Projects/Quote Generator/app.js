const randomQuotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.", 
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don't watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you."
];

// const quote = document.getElementById('quote')
// const generateQuote = () => {
//     let i = Math.floor(Math.random()*randomQuotes.length)
//     quote.textContent = randomQuotes[i];
// }

// alternate method which does not repeat the quote is done tracking the indices of the array
// we do this by using Set() : a built in JavaScript class
// called by new keyword

// this new method has less performance issues than above one

const usedIndex = new Set();
const quote = document.getElementById("quote");

const generateQuote = () => {
    if(usedIndex.size >= randomQuotes.length){
        usedIndex.clear();
    }
    while(true){
        let i = Math.floor(Math.random() * randomQuotes.length);

        if(usedIndex.has(i)) continue
        
        quote.textContent = randomQuotes[i];
        break;
    }
}
