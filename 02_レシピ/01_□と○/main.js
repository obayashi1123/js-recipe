const figure = document.getElementById("figure")

// ボタンを押したら変化すコード
// const squareButton = document.getElementById("square-button")
// const circleButton = document.getElementById("circle-button")

// circleButton.onclick = function () {
//   figure.classList.add("rounded")
// }

// squareButton.onclick = function () {
//   figure.classList.remove("rounded")
// }

// 図をクリックしたら変化するコード
// figure.onclick = function () {
//   figure.classList.toggle("rounded")
// }

// マウスが乗ったら変化するコード
// figure.onmouseover = function () {
//   figure.classList.toggle("rounded")
// }

// figure.onmouseout = function () {
//   figure.classList.toggle("rounded")
// }

const circulation = ["square", "triangle", "rounded"]
let counter = 0

figure.onclick = function () {
  figure.classList.remove(circulation[counter % 3])
  counter++
  figure.classList.add(circulation[counter % 3])
}
