const app = "I don't do much."
var dodger = document.getElementById('dodger')

function moveDodgerRight(){
  var removePX = dodger.style.left.replace('px','')
  var right = parseInt(removePX, 10)

  if(numbers > 0){
    dodger.style.right = `${right - 1}px`
  }
}

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
document.addEventListener('keydown', function(e){
  if(e.which === 39){
    moveDodgerRight()
  }else if (e.which === 37) {
    moveDodgerLeft()
  }
})
