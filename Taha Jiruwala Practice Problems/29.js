// Count the Number of Vowels in a String

function countVowels (str) {
    let stringArr = str.split("");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for(let i=0; i < stringArr.length; i++ ){
        if (vowels.includes(stringArr[i].toLowerCase())) {
            vowelCount++
        }
    }
    return vowelCount;
}


console.log(countVowels('hello'));
console.log(countVowels('OpenAI'));