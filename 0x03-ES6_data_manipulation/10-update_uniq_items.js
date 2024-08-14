export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  return map.forEach((_, key) => map.set(key, 100));
}
