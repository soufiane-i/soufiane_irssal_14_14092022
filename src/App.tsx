import "./App.css";
import Router from "./Router";
import { HashRouter } from "react-router-dom";

import { useEffect, useState } from "react";
import dataContext from "./Context/dataContext";
import { Employee } from "./Interface";
import { GetEmployees, SetEmployees } from "./API/employees";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    setEmployees(GetEmployees());
  }, []);

  function UpdateEmployee(employees: Employee[]) {
    setEmployees([...employees]);
    SetEmployees([...employees]);
  }

  const contextData = {
    employees,
    updateEmployees: UpdateEmployee,
  };
  return (
    <HashRouter>
      <dataContext.Provider value={contextData}>
        <div id="app">
          <Router />
        </div>
      </dataContext.Provider>
    </HashRouter>
  );
}

export default App;
