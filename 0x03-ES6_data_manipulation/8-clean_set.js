export default function cleanSet(set, startString) {
  if (startString.length == 0) {
    return '';
  }
  const match = [];
  set.forEach(element => element.startsWith(startString)
  ? match.push(element.replace(startString, '')) : null); 
  return match.join('-');;
}
