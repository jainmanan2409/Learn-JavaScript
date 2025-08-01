let input = document.getElementById("input");

const checkPalindrome = (str ='') => {
    let revStr = '';
    for(let i= str.length -1; i>= 0; i--){
        revStr += str[i];
    }
    if(str === revStr){
        return true;
    } else {
        return false;
    }
}

let checkButton = document.getElementById("check");

checkButton.addEventListener("click", () => {
    if(checkPalindrome(input.value) === true){
        document.getElementById("result").textContent = `The given value: ${input.value} is a Palindrome!`;
    } else {
        document.getElementById("result").textContent = `The given value: ${input.value} is not a Palindrome!`;
    }

    input.value = '';
})