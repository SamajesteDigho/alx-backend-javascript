export default function getListStudentIds(objects) {
  if (!Array.isArray(objects)) {
    return Array();
  }
  const ids = [];
  objects.map((obj) => ids.push(obj.id));
  return ids;
}
