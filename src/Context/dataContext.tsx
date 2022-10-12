import { createContext } from "react";

export default createContext({
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: "",

  updateFirstName: (name: any) => {},
  updateLastName: (name: any) => {},
  updateDateOfBirth: (name: any) => {},
  updateStartDate: (name: any) => {},
  updateStreet: (name: any) => {},
  updateCity: (name: any) => {},
  updateState: (name: any) => {},
  updateZipCode: (name: any) => {},
  updateDepartment: (name: any) => {},
});
