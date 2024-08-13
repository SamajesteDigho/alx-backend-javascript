export default function getListStudentIds(objects) {
  if (!Array.isArray(objects)) {
    return Array();
  }
  return objects.map((obj) => obj.id);
}
