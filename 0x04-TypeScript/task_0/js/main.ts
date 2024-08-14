interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const std1: Student = {
  firstName: "Jordan",
  lastName: "DIGHO",
  age: 20,
  location: "Douala",
};
const std2: Student = {
  firstName: "Mel",
  lastName: "Hordan",
  age: 18,
  location: "Yaounde",
};

const studentList: Array<Student> = [std1, std2];

function displayRows(data: Array<Student>): void {
  const table = document.getElementById("table_body");
  data.forEach((elt) => {
    const row = `<tr>
                        <td>${elt.firstName}</td>
                        <td>${elt.location}</td>
                    </tr>`;
    table.innerHTML += row;
  });
}

displayRows(studentList);
