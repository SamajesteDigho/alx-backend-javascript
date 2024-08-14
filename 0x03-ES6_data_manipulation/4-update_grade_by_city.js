export default function updateStudentGradeByCity(objects, city, newGrades) {
  return objects.filter((obj) => obj.location === city).map((obj) => {
    const grade = newGrades.find((grd) => grd.studentId === obj.id);
    const newObj = { ...obj };
    grade ? newObj['grade'] = grade.grade : newObj['grade'] = 'N/A';
    return newObj;
  });
}
