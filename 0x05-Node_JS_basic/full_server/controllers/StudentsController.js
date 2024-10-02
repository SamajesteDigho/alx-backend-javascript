import { readDatabase } from '../utils'

class StudentsController {
  constructor() {
    this.database = process.argv[2];
  }

  static getAllStudents(request, response) {
    readDatabase(this.database)
      .then(data => {
        response.status(200);
        let string = '';
        string += 'This is the list of our students\n';
        Object.keys(data).forEach(elt => {
          string += `Number of students in ${elt}: ${data[elt].length}. List: ${data[elt].join(',')}`;
        });
        response.send(string);
      })
      .catch(err => {
        response.status(500);
        response.send(err);
      });
    return response;
  }

  static getAllStudentsByMajor(request, response) {
    const major = 'CC';
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(this.database)
        .then(data => {
          response.status(200);
          const result = data[major];
          response.send(`List: ${result.join(',')}`);
        })
        .catch(err => {
          response.status(500);
          response.send(err);
        });
    }
    return response;
  }
}

export default StudentsController;
