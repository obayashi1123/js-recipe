const fizzBuzz = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i.toString().indexOf("3") !== -1) {
      console.log(i.toString() + "!!!!!!")
    } else if (i % 3 === 0) {
      console.log(i.toString() + "!!!!!!")
    } else if (i % 5 === 0) {
      console.log(i.toString() + "!!!!!!")
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(60)
