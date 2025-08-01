

const lavButton = document.getElementById("lavender");
const mintButton = document.getElementById("mint");
const skyButton = document.getElementById("sky");
const randomButton = document.getElementById("random");

lavButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "hsl(303, 71%, 85%)";
})

mintButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "hsl(128, 89%, 83%)";
})

skyButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "hsl(209, 58%, 58%)"
})

const rgb = () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
}


randomButton.addEventListener("click", () => {
    document.body.style.backgroundColor = rgb();
})