import { Dependent } from "../../classes/dependent";
import { Employee } from "../../classes/employee";
import { Gender } from "../../enums/genders-enum";
import { employeeRetirementFee } from "../../functions/employee-retirement-fee";

export default () => {
  const carlos = new Employee("Carlos", 1200, "8", [new Dependent("Marquinhos", 11, 41252162587, Gender.MALE)]);
  console.log(employeeRetirementFee(carlos));
};
