import Header from "../Header";
import Nav from "../Nav";
import CreateEmployeeForm from "./CreateEmployeeForm";

function HomePage() {
  return (
    <>
      <Header />
      <Nav refLink={"employee-list"} text={"View Current Employees"} />
      <CreateEmployeeForm />
    </>
  );
}

export default HomePage;
