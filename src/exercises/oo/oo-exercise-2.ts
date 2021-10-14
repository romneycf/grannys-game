import { Dependent } from "../../classes/dependent";
import { Employee } from "../../classes/employee";
import { Gender } from "../../enums/genders-enum";

export default () => {
    const mario = new Employee("Mario", 4500, "9" [new Dependent("Junior", 14, 12332141221, Gender.MALE), "9"]);
    mario.missedDays = 2;
    // console.log(mario);
    mario.vacation.lastVacationDate = new Date("10/13/2020");
    console.log("O Mario tem ferias para tirar?", mario.vacation.hasVacation());
};