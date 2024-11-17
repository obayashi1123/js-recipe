let counter = 0
let id = null

const countUp = function (finNum) {
  counter += 1

  if (counter % 3 === 0) {
    console.log(counter.toString() + "!!!!!!!!")
  } else {
    console.log(counter)
  }

  if (counter === finNum) {
    clearInterval(id)
  }
}

const genkiFunction = function (finNum) {
  id = setInterval(countUp, 1000, finNum)
}

genkiFunction(1000)
