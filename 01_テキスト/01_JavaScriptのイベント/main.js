const button = document.getElementById("button")

const alertMassage = function () {
  alert("クリックされました")
}

// 最後に()をつけると即時実行される
button.onclick = alertMassage

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayhello = function () {
  console.log("hello")
}

const logValue = function (e) {
  console.log(e.target.value)
}

document.onkeydown = function (e) {
  console.log(e.key)
}

inputText.oninput = logValue
inputDate.oninput = logValue
