export default function createIteratorObject(report) {
  const data = [];
  for (const departUsers of Object.values(report.allEmployees)) {
    for (const user of departUsers) {
      data.push(user);
    }
  }
  return data;
}
