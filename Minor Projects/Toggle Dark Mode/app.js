const body = document.body;
const toggle = document.getElementById("toggle");

let isDark = false;

const toggleDarkMode = () => {
    if(!isDark){
        body.style.backgroundColor = "black";
        document.getElementById("head").style.color = "white";
        document.getElementById("text").style.color = "white";
        isDark = true;
    } else {
        body.style.backgroundColor = "white";
        document.getElementById("head").style.color = "black";
        document.getElementById("text").style.color = "black";
        isDark = false;
    }
    
}


toggle.addEventListener("click", toggleDarkMode);