const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


module.exports = function handleInput(cb) {
  const lines = [];
  
  rl.on('line', line => {
    lines.push(line);
  });
  
  rl.on('close', () => {
    cb(lines);
  });
}