const printPrimeNumber = number => {
  if(!Number.isSafeInteger(number) || number <= 1){
    return 'Invalid Number'
  }
  const primeNumbers = []
  let start = 2

  while(start <= number){
    let isDivided = false
    for(let i=2; i<start; i++){
      if(start % i === 0){
        isDivided = true
        break;
      }
    }
    if(!isDivided){
      primeNumbers.push(start)
    }
    isDivided = false
    start++
  }
  return primeNumbers
}

console.log(printPrimeNumber(31))
console.log(printPrimeNumber(1))