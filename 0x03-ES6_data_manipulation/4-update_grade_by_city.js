export default function updateStudentGradeByCity(objects, city, newGrades) {
  return objects.filter(obj => obj.location === city).map(obj => {
    const grade = newGrades.find(grd => grd.studentId === obj.id);
    grade ? obj.grade = grade.grade : obj.grade = 'N/A';;;
          
    return obj;
  });
}
