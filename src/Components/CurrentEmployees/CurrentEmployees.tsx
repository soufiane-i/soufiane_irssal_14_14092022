import Header from "../Header";
import Nav from "../Nav";
import EmployeesTable from "./EmployeesTable";
import { useContext, useState } from "react";
import dataContext from "../../Context/dataContext";

function CurrentEmployees() {
  const contextData = useContext(dataContext);
  console.log(contextData);

  return (
    <>
      <Header />
      <Nav refLink={""} text={"Home"} />
      <main>
        <EmployeesTable />
      </main>
    </>
  );
}

export default CurrentEmployees;
