function displayMessage(message) {
  if (process.stdout.writable) {
    console.log(message);
  }
}

module.exports = displayMessage;
