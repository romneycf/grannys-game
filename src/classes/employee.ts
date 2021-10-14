import { Dependent } from "./dependent";

export class Employee {
  name: string;
  salary: number;
  missedDays: number;
  mothersName: string | undefined;
  dependent: Dependent[];
  phoneNumber: string;
  constructor(name: string, salary: number, phoneNumber: string, dependent: Dependent[] = []) {
    this.name = name;
    this.salary = salary;
    this.missedDays = 0;
    this.dependent = dependent;
    this.phoneNumber = phoneNumber;
    
  }
}
