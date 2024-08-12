export default function getStudentsByLocation(objects, city) {
  if (!Array.isArray(objects)) {
    return Array();
  }
  return objects.filter((obj) => obj.location === city);
}
