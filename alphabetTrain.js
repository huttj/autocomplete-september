const handleInput = require('./handleInput');


const zCode = 'z'.charCodeAt(0);

function incrementMostFrequentLetter(word) {
  const counts = {};

  let current;
  let count = 1;

  word.split('').forEach(l => {

    if (l == current) {

      count++;

    } else if (current) {
      
      if (current != ' ' && (!counts[current] || counts[current] < count)) {
        counts[current] = count;
      }

      count = 1;
    }

    current = l;
  });

  if (!counts[current] || counts[current] < count) {
    counts[current] = count;
  }


  // word.split('').forEach(l => {
  //   if (last && last != l) {
  //     counts[last] = 0;
  //   }
  //   counts[l] = (counts[l] || 0) + 1;
  //   last = l;
  // });

  let largest;
  for (const key in counts) {
    if (!largest || counts[largest] < counts[key]) {
      largest = key;
    }
  }

  count = counts[largest];

  let newCode = largest.charCodeAt(0) + count;

  while (newCode > zCode) {
    newCode -= 26;
  }

  return String.fromCharCode(newCode);
}

handleInput(lines => lines.map(incrementMostFrequentLetter).map(result => console.log(result)));