function displayMessage(message) {
  if (process.stdout.writable) {
    process.stdout.write(`${message}\n`);
  }
}

module.exports = displayMessage;
