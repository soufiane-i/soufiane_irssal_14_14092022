import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Router from "./Router";

import { useState } from "react";
import dataContext from "./Context/dataContext";

function App() {
  /*   const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });
  const contextData = {
    data,
    updateData: setData,
  }; */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
  const contextData = {
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    street,
    city,
    state,
    zipCode,
    department,
    updateFirstName: setFirstName,
    updateLastName: setLastName,
    updateDateOfBirth: setDateOfBirth,
    updateStartDate: setStartDate,
    updateStreet: setStreet,
    updateCity: setCity,
    updateState: setState,
    updateZipCode: setZipCode,
    updateDepartment: setDepartment,
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
