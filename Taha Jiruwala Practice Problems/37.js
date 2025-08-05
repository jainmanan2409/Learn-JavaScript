// Remove Specific Non-Contiguous Elements from an Array
const removeElements = (arr, el) => {
    return arr.filter(item => !el.includes(item));
}

console.log(removeElements([7, 14, 21, 28], [14, 28]));
