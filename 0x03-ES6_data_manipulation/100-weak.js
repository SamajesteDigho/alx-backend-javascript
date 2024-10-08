export const weakMap = new WeakMap();

export function queryAPI(epa) {
  const nb = weakMap.get(epa);
  if (!nb) {
    weakMap.set(epa, 1);
  } else if (nb >= 4) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(epa, nb + 1);
  }
  return weakMap;
}
