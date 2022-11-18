import Header from "../Header";
import Nav from "../Nav";
import CreateEmployeeForm from "./CreateEmployeeForm";
import { ModalPlugin } from "soufiane.irssal_plugin";

/**
 * Global Struture of page
 * @returns HomePage Component
 */
function HomePage() {
  return (
    <>
      <Header />
      <Nav
        refLink="employee-list"
        text="View Current Employees"
        arrowDirection="right"
      />
      <main>
        <CreateEmployeeForm />
      </main>
      <ModalPlugin />
    </>
  );
}

export default HomePage;
