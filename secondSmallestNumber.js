const secondSmallestNumber = arr => {
  let smallest = Number.MAX_VALUE
  let secondSmallest = Number.MAX_VALUE
  let result

  if (arr.length < 2) {
    result = 'Invalid Input'
  }

  arr.forEach(number => {
    if(number < smallest){
      secondSmallest = smallest
      smallest = number
    } else if(number < secondSmallest && number !== smallest){
      secondSmallest = number
    }
  })

  if(secondSmallest == Number.MAX_VALUE){
    result = 'The array contains just one type of element in it.'
  } else {
    result = `The second smallest element is ${secondSmallest}`
  }

  return result
}

console.log(secondSmallestNumber([2,2,2]))
console.log(secondSmallestNumber([22,2,22, 12, 3, 4, 554, 0]))
console.log(secondSmallestNumber([2, Number.MIN_VALUE, 1, 4, 5, 10, 09]))