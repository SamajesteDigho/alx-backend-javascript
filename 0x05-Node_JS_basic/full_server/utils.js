const { FILE } = require('dns');
const fs = require('fs');

function arrify_clean_data_set(data) {
  let modified = data.split('\n');
  modified = modified.slice(1);
  if (modified.length > 0 && modified[modified.length - 1].length === 0) {
    modified.pop();
  }
  return modified;
}

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        data = arrify_clean_data_set(data);
        const FIELDS = {};

        data.forEach(elt => {
          const parts = elt.split(',');
          if (!Object.keys(FIELDS).includes(parts[3])) {
            FIELDS[parts[3]] = [];
          }
          FIELDS[parts[3]].push(parts[0]);
        });
        
        resolve(FIELDS);
      }
    });
  });
}

export default { readDatabase };
