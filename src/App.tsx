import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Router from "./Router";

import { useState } from "react";
import dataContext from "./Context/dataContext";
import { firebaseConfig } from "./Firebase/config";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { rows } from "./Fixtures";
import { Employee } from "./Interface";
var firebase = require("firebase/app");
require("firebase/database");

function App() {
  const [employees, setEmployees] = useState<Employee[]>(rows);

  const contextData = {
    employees,
    updateEmployees: setEmployees,
  };
  return (
    // @ts-ignore: Unreachable code error
    <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
      <dataContext.Provider value={contextData}>
        <div id="app">
          <Router />
        </div>
      </dataContext.Provider>
    </FirebaseDatabaseProvider>
  );
}

export default App;
