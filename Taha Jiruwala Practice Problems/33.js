//Convert an Array of Strings to Uppercase

function toUpperCaseAlpha(arr) {
    
    let newArr = [];
    for(let i=0; i <= arr.length - 1; i++){
        let uppCase = arr[i].toUpperCase()
        newArr.push(uppCase);
    }
    return newArr;
}

console.log(toUpperCaseAlpha(["hello", "world"]));