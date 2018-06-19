const app = "I don't do much."

function moveDodgerRight(){
  var removePX = dodger.style.left.replace('px','')
  var numbers = parseInt(removePX, 10)

  if(numbers > 0){
    dodger.style.right = `${numbers - 1}px`
  }
}

