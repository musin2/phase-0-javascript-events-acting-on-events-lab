let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let leftNum = dodger.style.left.replace('px', '');
  let left = parseInt(leftNum, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  let leftNum = dodger.style.left.replace('px', '');
  let left = parseInt(leftNum, 10)
  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})
