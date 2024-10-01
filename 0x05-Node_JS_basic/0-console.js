export default function displayMessage (message) {
  if (process.stdout.writable) {
    process.stdout.write(message);
  }
}
