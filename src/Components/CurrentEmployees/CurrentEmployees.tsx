import Header from "../Header";
import Nav from "../Nav";
import EmployeesTable from "./EmployeesTable";

function CurrentEmployees() {
  return (
    <>
      <Header />
      <Nav refLink={""} text={"Home"} />
      <EmployeesTable />
    </>
  );
}

export default CurrentEmployees;
