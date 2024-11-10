const display = document.getElementById("display")
const plus1 = document.getElementById("plus1")
const minus1 = document.getElementById("minus1")
const multiply2 = document.getElementById("multiply2")
const reset = document.getElementById("reset")

let count = 0

plus1.onclick = function () {
  count += 1
  display.textContent = count
}

minus1.onclick = function () {
  count -= 1
  display.textContent = count
}

multiply2.onclick = function () {
  count *= 2
  display.textContent = count
}

reset.onclick = function () {
  count = 0
  display.textContent = count
}
