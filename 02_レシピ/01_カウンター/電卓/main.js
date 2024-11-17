const buttonOne = document.getElementById("1")
const buttonTwo = document.getElementById("2")
const buttonThree = document.getElementById("3")
const buttonFour = document.getElementById("4")
const buttonFive = document.getElementById("5")
const buttonSix = document.getElementById("6")
const buttonSeven = document.getElementById("7")
const buttonEight = document.getElementById("8")
const buttonNine = document.getElementById("9")
const buttonZero = document.getElementById("0")
const buttonPlus = document.getElementById("+")
const buttonMinus = document.getElementById("-")
const buttonMultiply = document.getElementById("×")
const buttonDivide = document.getElementById("/")
const buttonRemainder = document.getElementById("%")
const buttonEqual = document.getElementById("=")
const buttonClear = document.getElementById("AC")

const display = document.getElementById("display")

let firstValue = ""
let secondValue = ""
let operator = ""
let result = 0

const appendValue = function (e) {
  if (operator !== "") {
    secondValue += e.srcElement.id
  } else {
    firstValue += e.srcElement.id
  }

  firstValue = parseInt(firstValue).toString()
  display.textContent = firstValue + operator + secondValue
}

const appendOperator = function (e) {
  if (firstValue === "") {
    return
  } else if (firstValue !== "" && operator !== "" && secondValue !== "") {
    equal()
  }

  operator = e.srcElement.id
  display.textContent = firstValue + operator + secondValue
}

const equal = function () {
  if (firstValue === "" || secondValue === "" || operator === "") {
    return
  }
  if (operator === "+") {
    result = parseInt(firstValue) + parseInt(secondValue)
  } else if (operator === "-") {
    result = parseInt(firstValue) - parseInt(secondValue)
  } else if (operator === "×") {
    result = parseInt(firstValue) * parseInt(secondValue)
  } else if (operator === "/") {
    result = parseInt(firstValue) / parseInt(secondValue)
  } else if (operator === "%") {
    result = parseInt(firstValue) % parseInt(secondValue)
  }

  firstValue = result.toString()
  operator = ""
  secondValue = ""
  console.log(firstValue)
  console.log(operator)
  console.log(secondValue)
  display.textContent = firstValue + operator + secondValue
}

const clear = function () {
  firstValue = "0"
  secondValue = ""
  operator = ""
  display.textContent = firstValue + operator + secondValue
}

buttonOne.onclick = appendValue
buttonTwo.onclick = appendValue
buttonThree.onclick = appendValue
buttonFour.onclick = appendValue
buttonFive.onclick = appendValue
buttonSix.onclick = appendValue
buttonSeven.onclick = appendValue
buttonEight.onclick = appendValue
buttonNine.onclick = appendValue
buttonZero.onclick = appendValue

buttonPlus.onclick = appendOperator
buttonMinus.onclick = appendOperator
buttonMultiply.onclick = appendOperator
buttonDivide.onclick = appendOperator
buttonRemainder.onclick = appendOperator
buttonEqual.onclick = equal
buttonClear.onclick = clear
