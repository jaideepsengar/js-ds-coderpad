const groupAnagramWords = arr => {
  const m = new Map();

  arr.forEach(word => {
    const source = word.split('').sort().join('');
    if(m.has(source) === false) {
      m.set(source, [word]);
    } else {
      m.get(source).push(word);
    }
  })

  for (let value of m.values()) {
    console.log(value);
  }
}

groupAnagramWords(['dog','god','log','lgo', 'gol','cat','tac', 'act'])