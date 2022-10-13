import { createContext } from "react";
import { Employee } from "../Interface";

interface contextInterface {
  employees: Employee[];
  updateEmployees: (employee: Employee[]) => void;
}
const context: contextInterface = {
  employees: [],
  updateEmployees: ([]) => {},
};
export default createContext(context);
