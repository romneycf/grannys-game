import { Gender } from "../enums/genders-enum";

export class Dependent {
  name: string;
  age: number;
  id: number;
  gender: Gender;
  constructor(name: string, age: number, id: number, gender: Gender) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.gender = gender;
  }
}
