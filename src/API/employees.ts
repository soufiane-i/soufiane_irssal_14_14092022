import { rows } from "../Fixtures";
import { Employee } from "../Interface";

export function GetEmployees() {
  return rows;
}

export function SetEmployees(employees: Employee[]) {
  //Fetch qui modifie le tableau employee
}
