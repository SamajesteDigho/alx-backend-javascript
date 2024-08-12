export default function hasValuesFromArray(set, array) {
  const array_set = new Set(array);
  return array_set.isSubsetOf(set);
}
