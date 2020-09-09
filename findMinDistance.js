function findMinimumDistance(string, first, second) {
  var startingFrom1 = 0;
  var startingFrom2 = 0;

  var index1 = 0;
  var index2 = 0;

  var min = Number.MAX_VALUE;

  if(string === '' || first === '' || second === '') {
    console.log('Invalid input string(s). Check conditions again.');
    return;
  }

  if((first.length % 2) === 0)
    var first_middle = (first.length/2)-1;
  else
    var first_middle = Math.floor(first.length/2);

  if((second.length % 2) === 0)
    var second_middle = (second.length/2)-1;
  else
    var second_middle = Math.floor(second.length/2);

  while(true) {
    index1 = string.indexOf(first,startingFrom1);
    console.log('first', first)
    console.log('startingFrom1', startingFrom1)
    console.log('first_middle', first_middle)
    console.log('index1', index1)
    if(index1===-1)
      break;

    index1 = index1 + first_middle;
    startingFrom1 = index1 + first.length;

    index2=0;
    startingFrom2=0;

    while(true) {
      index2 = string.indexOf(second,startingFrom2);
      console.log('second', second)
      console.log('startingFrom2', startingFrom2)
      console.log('second_middle', second_middle)
      console.log('index2', index2)
      if(index2===-1)
        break;

      index2 = index2 + second_middle;
      startingFrom2 = index2 + second.length;

      min = Math.min(Math.abs(index2-index1),min);
      console.log('index2', index2)
      console.log('index1', index1)
      console.log('Math.abs(index2-index1)', Math.abs(index2-index1))
      console.log('min', min)
    }
  }

  if(min === Number.MAX_VALUE) {
    console.log('Value not found in input String.');
    return;
  }
  else
    return min;
}

const string = 'XYZ  is          ABC ';
const first = 'ABC';
const second = 'XYZ';



var min = findMinimumDistance(string, first, second);
console.log(`The minimum distance is ${min}`);

