import { Employee } from "../classes/employee";

export function employeeRetirementFee(employee: Employee): number {
    return employee.salary * 0.084;
}