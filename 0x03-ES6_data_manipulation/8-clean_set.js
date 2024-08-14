export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const match = [];
  set.forEach((elt) => {
    if (elt.startsWith(startString)) {
      match.push(elt.replace(startString, ''));
    }
  });
  return match.join('-');
}
