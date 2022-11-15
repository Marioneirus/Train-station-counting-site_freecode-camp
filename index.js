
let count = 0;

let countEl = document.getElementById("count-el")
console.log(countEl)

function increment() {
    count = count + 1;
    countEl.innerHTML = count
}

function save() {
    console.log(count)
}