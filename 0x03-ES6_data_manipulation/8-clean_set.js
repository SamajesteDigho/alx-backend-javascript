export default function cleanSet(set, startString) {
  if (startString.length == 0) {
    return '';
  }
  const match = Array();
  let string = '';
  set.forEach(element => element
    .startsWith(startString) == true ? match.push(element) : null);
  string = match.join('-');
  string = string.replaceAll(startString, '');
  return string;
}
