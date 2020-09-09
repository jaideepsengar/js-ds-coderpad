const fibonacci = (n) => {
  let current = 1
  let previous = 0
  const result = [1]
  let iterator = n-1

  if (n === 1) {
    return result;
  }

  while(iterator){
    current += previous
    previous = current - previous

    result.push(current)
    iterator -= 1
  }

  return result
}

console.log(fibonacci(10))