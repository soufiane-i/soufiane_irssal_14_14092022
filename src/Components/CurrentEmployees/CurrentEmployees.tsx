import Header from "../Header";
import Nav from "../Nav";
import EmployeesTable from "./EmployeesTable";
import { useContext } from "react";
import dataContext from "../../Context/dataContext";

/**
 * Page containing header, navigation button and the employee table
 * @returns CurrentEmployees component
 */
function CurrentEmployees() {
  const contextData = useContext(dataContext);

  return (
    <>
      <Header />
      <Nav refLink="" text="Home" arrowDirection="left" />
      <main>
        <EmployeesTable />
      </main>
    </>
  );
}

export default CurrentEmployees;
