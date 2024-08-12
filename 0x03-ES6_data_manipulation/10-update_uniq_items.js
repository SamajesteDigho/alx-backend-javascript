export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((_, key) => map.set(key, 100));
    return map;
  } else {
    throw new Error('Cannot process');
  }
}
