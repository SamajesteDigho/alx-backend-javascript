export default function getStudentIdsSum(objects) {
  return objects.reduce((sum, obj) => sum + obj.id, 0);
}
