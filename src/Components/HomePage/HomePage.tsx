import Header from "../Header";
import Nav from "../Nav";
import CreateEmployeeForm from "./CreateEmployeeForm";
import Modal from "./Modal/modal";

function HomePage() {
  return (
    <>
      <Header />
      <Nav refLink={"employee-list"} text={"View Current Employees"} />
      <main>
        <CreateEmployeeForm />
      </main>
    </>
  );
}

export default HomePage;
