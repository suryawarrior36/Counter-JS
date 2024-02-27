let numEl = document.getElementById("counter-number")
let count=0

const incrementFunction = () => {
    count += 1
    numEl.textContent = count
}

const decrementFunction = () => {
    count -=1
    numEl.textContent = count
}