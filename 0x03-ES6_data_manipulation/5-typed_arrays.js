export default function createInt8TypedArray(length, postion, value) {
  const array = new ArrayBuffer(length);
  if (postion >= length) {
    throw new Error('Position outside range');
  }
  const val = new DataView(array);
  val.setInt8(postion, value);
  return val;
}
