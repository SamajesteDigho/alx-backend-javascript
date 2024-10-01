process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

process.stdin.on('data', (data) => {
  if (process.stdout.writable) {
    process.stdout.write(`Your name is: ${data}`);
  }
});
