export default function getListStudentIds(objects) {
  if (Array.isArray(objects)) {
    return objects.map((obj) => obj.id);
  }
  return [];
}
