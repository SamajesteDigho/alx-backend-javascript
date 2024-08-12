export default function createInt8TypedArray(length, postion, value) {
  const array = new Int8Array(length);
  if (postion > length - 1) {
    throw new Error('Position outside range');
  }
  array[postion] = value;
  return array;
}
