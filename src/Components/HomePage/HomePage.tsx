import Header from "../Header";
import Nav from "../Nav";
import CreateEmployeeForm from "./CreateEmployeeForm";
import { ModalPlugin } from "soufiane.irssal_plugin";

import Modal from "./Modal/modal";
function HomePage() {
  return (
    <>
      <Header />
      <Nav refLink={"employee-list"} text={"View Current Employees"} />
      <main>
        <CreateEmployeeForm />
      </main>
      {/* <ModalPlugin /> */}
      <Modal />
    </>
  );
}

export default HomePage;
