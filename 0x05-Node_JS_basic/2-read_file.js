const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    let NUMBER_OF_STUDENTS = 0;
    let lines = data.split('\n');
    if (lines.length !== 0 && lines[lines.length - 1].length === 0) {
      lines.pop();
    }
    lines = lines.slice(1);
    const FIELDS = {};

    lines.forEach((elt) => {
      NUMBER_OF_STUDENTS += 1;
      const parts = elt.split(',');
      if (!Object.keys(FIELDS).includes(parts[3])) {
        FIELDS[parts[3]] = [];
      }
      FIELDS[parts[3]].push(parts[0]);
    });

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    Object.keys(FIELDS).forEach((elt) => {
      console.log(`Number of students in ${elt}: ${FIELDS[elt].length}. List: ${FIELDS[elt].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
