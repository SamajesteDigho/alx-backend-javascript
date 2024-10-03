const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        let string = '';
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

        string += `Number of students: ${NUMBER_OF_STUDENTS}\n`;
        console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
        Object.keys(FIELDS).forEach((elt) => {
          string += `Number of students in ${elt}: ${FIELDS[elt].length}. List: ${FIELDS[elt]}\n`;
          console.log(`Number of students in ${elt}: ${FIELDS[elt].length}. List: ${FIELDS[elt].join(', ')}`);
        });
        resolve(string);
      }
    });
  });
}

module.exports = countStudents;
