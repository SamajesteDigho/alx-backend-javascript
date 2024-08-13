export default function getStudentsByLocation(objects, city) {
  if (!Array.isArray(objects)) {
    return [];
  }
  return objects.filter((obj) => obj.location === city);
}
