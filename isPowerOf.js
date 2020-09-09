const isPowerOf = (number, pow) => {
  if(number <= 1){
    return false
  }

  let dividerNumber = number
  while(dividerNumber !==1){
    if(number % dividerNumber !== 0){
      return false
    }
    dividerNumber /= pow
  }
  return true
}

console.log(isPowerOfTwo(16, 4))
console.log(isPowerOfTwo(30, 3))