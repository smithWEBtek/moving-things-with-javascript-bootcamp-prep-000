const app = "I don't do much."
var dodger = document.getElementById('dodger')

function moveDodgerRight(){
  var removePX = dodger.style.left.replace('px','')
  var numbers = parseInt(removePX, 10)

  if(numbers > 0){
    dodger.style.right = `${numbers - 1}px`
  }
}

document.addEventListener('keydown', function(e){
  if(e.which === 39){
    moveDodgerRight()
  }
})
