const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function countFreqDigit(n, d) {
  return n.toString().split('').filter(char=>char===d.toString()).length;
}

readline.question('', (input) => {
  const [n, d] = input.split(' ').map(Number);
  console.log(countFreqDigit(n, d));
  readline.close();
});
