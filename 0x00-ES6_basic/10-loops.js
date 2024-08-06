export default function appendToEachArrayValue(array, appendString) {
  let newA = [];
  for (const idx of array) {
    newA.push(`${appendString}${idx}`);
  }
  return newA;
}
