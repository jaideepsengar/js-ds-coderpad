const secondSmallestNumberSorted = arr => {
  let smallest = Number.MAX_VALUE;
  let position;
  let result;

  if(arr.length < 2) {
    result = 'There is no second smallest element in array'
  }

  arr.forEach((number, i) => {
    if(smallest > number) {
      smallest = number;
      position = i;
    }
  })

  while(arr[position%arr.length]==arr[(position+1)%arr.length]) {
    position++
    if(position > arr.length) {
      return 'All the elements in the array are same.'
    }
  }
  result = arr[(position+1)%arr.length]
  return result
}

console.log(secondSmallestNumberSorted([-1,-1,0,0,0,0,1,1,1,2,3,4,-1,-1]));
console.log(secondSmallestNumberSorted([-1,-1]));
