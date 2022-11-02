import "./App.css";
import Router from "./Router";

import { useState } from "react";
import dataContext from "./Context/dataContext";
import { rows } from "./Fixtures";
import { Employee } from "./Interface";

function App() {
  const [employees, setEmployees] = useState<Employee[]>(rows);

  const contextData = {
    employees,
    updateEmployees: setEmployees,
  };
  return (
    <dataContext.Provider value={contextData}>
      <div id="app">
        <Router />
      </div>
    </dataContext.Provider>
  );
}

export default App;
