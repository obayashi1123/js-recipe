const display = document.getElementById("display")
const button = document.getElementById("button")
let count = 0

button.onclick = function () {
  display.textContent = count
  count++
}
