export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    return map.forEach((_, key) => map.set(key, 100));
  } else {
    throw new Error('Cannot process');
  }
}
