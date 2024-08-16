/** Exxo 1 */
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

/** Exo 2 */
export interface Directors extends Teacher {
  numberOfReports: number;
}

/** Exo 3 */
interface PrintTeacherFunction { (firstName: string, lastName: string): string }

const printTeacher: PrintTeacherFunction = function (
  firstName: string,
  lastName: string
) {
  return `${firstName.at(0)}. ${lastName}`;
};

/** Exo 4 */
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
