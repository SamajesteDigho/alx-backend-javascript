/// <reference path="Teacher.ts">
/// <reference path="Subject.ts">

namespace Subjects {
  export interface Teacher {
    experienceTeachingC: number;
  }

  export class Cpp extends Subject {
    [x: string]: any;

    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC == null) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
