
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetEl = document.getElementById("reset-el")

let count = 0;


console.log(countEl);

function increment() {
    count += 1;
    countEl.innerHTML = count;
}

function save() {
    let save = count + " - ";
    
    saveEl.textContent += save;
    countEl.innerHTML = 0;
    count = 0;
}

function reset() {
    countEl.textContent = 0;
    saveEl.textContent = " ";
    count = 0;
}

function decrease() {
    countEl.textContent -= 1;
}
   

