export default function cleanSet(set, startString) {
  if (startString.length == 0) {
    return '';
  }
  const match = [];
  set.forEach((elt) => elt.startsWith(startString)
  ? match.push(elt.replace(startString, '')) : null); 
  return match.join('-');
}
