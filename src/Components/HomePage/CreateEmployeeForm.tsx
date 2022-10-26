import { Button, CardContent, Grid, TextField } from "@mui/material";
import dataContext from "../../Context/dataContext";
import DatePicker from "./Form/DatePicker";
import SelectInput from "./Form/SelectInput";
import TextFieldInput from "./Form/TextFiled";
import { useContext, useEffect, useState } from "react";
import { useForm } from "./Form/useForm";
import { useNavigate } from "react-router-dom";
import { FirebaseDatabaseMutation } from "@react-firebase/database";
import { Employee } from "../../Interface";

import { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type SelectInputProps = {
  label: string;
};

const initialValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  stateDate: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: "",
};

function CreateEmployeeForm() {
  const navigate = useNavigate();
  const { values, setValues, handleInputChange } = useForm(initialValues);
  const [dateOfBirthValue, setDateOfBirthValue] = useState<any>("");
  const [startDateValue, setStartDateValue] = useState<any>("");
  const [stateValue, setStateValue] = useState<any>("");
  const [departmentValue, setDepartmentValue] = useState<any>("");
  const contextData = useContext(dataContext);
  const nameRegex = /^[a-z ,.'-]+$/i;
  const adressRegex = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/i;
  const zipCodeRegex = /^[0-9]{1,3}$/i;

  const dateOfBirthHandleChange = (newValue: Dayjs | null) => {
    setDateOfBirthValue(newValue);
  };

  const startDateHandleChange = (newValue: Dayjs | null) => {
    setStartDateValue(newValue);
  };

  const departmentHandleChange = (event: SelectChangeEvent) => {
    setDepartmentValue(event.target.value as string);
  };

  const stateHandleChange = (event: SelectChangeEvent) => {
    setStateValue(event.target.value as string);
  };

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    function crossDown() {
      const modal = document.querySelector(".modalContainer");
      modal?.classList.add("modalOff");
      console.log(modal);
    }
    let firstNameTest = false;
    let lastNameTest = false;
    let startDateTest = false;
    let departmentTest = false;
    let dateOfBirthTest = false;
    let streetTest = false;
    let cityTest = false;
    let stateTest = false;
    let zipCodeTest = false;

    const dateOfBirthNewData: Date = new Date(
      `${dateOfBirthValue.$y}-${dateOfBirthValue.$M}-${dateOfBirthValue.$D}`
    );

    const startDateValueNewData: Date = new Date(
      `${startDateValue.$y}-${startDateValue.$M}-${startDateValue.$D}`
    );

    const newData: Employee = {
      firstName: values.firstName,
      lastName: values.lastName,
      startDate: startDateValueNewData,
      department: departmentValue,
      dateOfBirth: dateOfBirthNewData,
      street: values.street,
      city: values.city,
      state: stateValue,
      zipCode: values.zipCode,
    };

    const firstNameInput = document.querySelectorAll(
      ".css-1idn90j-MuiGrid-root"
    )[0];
    const lastNameInput = document.querySelectorAll(
      ".css-1idn90j-MuiGrid-root"
    )[1];
    const dateOfBirthInput = document.querySelectorAll(
      ".css-1idn90j-MuiGrid-root"
    )[2];
    const startDateInput = document.querySelectorAll(
      ".css-1idn90j-MuiGrid-root"
    )[3];
    const streetInput = document.querySelectorAll(
      ".css-1idn90j-MuiGrid-root"
    )[4];
    const cityInput = document.querySelectorAll(".css-1idn90j-MuiGrid-root")[5];
    const stateInput = document.querySelectorAll(
      ".css-1idn90j-MuiGrid-root"
    )[6];
    const zipCodeInput = document.querySelectorAll(
      ".css-1idn90j-MuiGrid-root"
    )[7];
    const departmentInput = document.querySelectorAll(
      ".css-1idn90j-MuiGrid-root"
    )[8];

    const name = document.querySelectorAll(".css-1idn90j-MuiGrid-root");
    console.log(document.querySelectorAll(".css-1idn90j-MuiGrid-root")[8]);

    if (nameRegex.test(values.firstName)) {
      firstNameTest = true;
      firstNameInput.classList.remove("error");
    } else {
      firstNameTest = false;
      firstNameInput.classList.add("error");
    }

    if (nameRegex.test(values.lastName)) {
      lastNameTest = true;
      lastNameInput.classList.remove("error");
    } else {
      lastNameTest = false;
      lastNameInput.classList.add("error");
    }

    if (adressRegex.test(values.street)) {
      streetTest = true;
      streetInput.classList.remove("error");
    } else {
      streetTest = false;
      streetInput.classList.add("error");
    }

    if (adressRegex.test(values.city)) {
      cityTest = true;
      cityInput.classList.remove("error");
    } else {
      cityTest = false;
      cityInput.classList.add("error");
    }

    if (zipCodeRegex.test(values.zipCode)) {
      zipCodeTest = true;
      zipCodeInput.classList.remove("error");
    } else {
      zipCodeTest = false;
      zipCodeInput.classList.add("error");
    }

    if (stateValue != "") {
      stateTest = true;
      stateInput.classList.remove("error");
    } else {
      stateTest = false;
      stateInput.classList.add("error");
    }

    if (departmentValue != "") {
      departmentTest = true;
      departmentInput.classList.remove("error");
    } else {
      departmentTest = false;
      departmentInput.classList.add("error");
    }

    if (dateOfBirthNewData.toString() != "Invalid Date") {
      dateOfBirthTest = true;
      dateOfBirthInput.classList.remove("error");
    } else {
      dateOfBirthTest = false;
      dateOfBirthInput.classList.add("error");
    }

    if (startDateValueNewData.toString() != "Invalid Date") {
      startDateTest = true;
      startDateInput.classList.remove("error");
    } else {
      startDateTest = false;
      startDateInput.classList.add("error");
    }

    if (
      firstNameTest &&
      lastNameTest &&
      startDateTest &&
      departmentTest &&
      dateOfBirthTest &&
      dateOfBirthTest &&
      streetTest &&
      cityTest &&
      stateTest &&
      zipCodeTest
    ) {
      console.log("submit");
      contextData.employees.push(newData);
      contextData.updateEmployees([...contextData.employees]);
      console.log(contextData);
      const modal = document.querySelector(".modalContainer");
      const cross = document.querySelector(".imgContainer");

      console.log(cross);

      cross?.addEventListener("keydown", crossDown);
      modal?.classList.remove("modalOff");
      //navigate("/employee-list");
    } else {
      console.log("refuse");
      console.log(firstNameTest);
      console.log(lastNameTest);
    }
  };
  return (
    <>
      <h2>Create Employee Form</h2>
      <form>
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={0}
          className="formGridContainer"
        >
          <Grid item className="gridItem" xs={12}>
            <TextFieldInput
              label="First Name"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} className="gridItem">
            <TextFieldInput
              label="Last Name"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} className="gridItem">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  toolbarPlaceholder="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={dateOfBirthValue}
                  onChange={dateOfBirthHandleChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        placeholder: "Date of Birth",
                      }}
                    />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} className="gridItem">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  toolbarPlaceholder="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={startDateValue}
                  onChange={startDateHandleChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        placeholder: "Start Date",
                      }}
                    />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <h3>Adress</h3>
          <Grid xs={12} item className="gridItem">
            <TextFieldInput
              label="Street"
              type="text"
              name="street"
              value={values.street}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid xs={12} item className="gridItem">
            <TextFieldInput
              label="City"
              type="text"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} className="gridItem">
            <FormControl fullWidth className="formInput">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stateValue}
                label="States"
                onChange={stateHandleChange}
                displayEmpty
                required
              >
                <MenuItem value="">States</MenuItem>
                {states.map((e) => (
                  <MenuItem value={e} key={e}>
                    {e}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} item className="gridItem">
            <TextFieldInput
              label="Zip Code"
              type="number"
              name="zipCode"
              value={values.zipCode}
              onChange={handleInputChange}
            />
          </Grid>
          <h3>Department</h3>
          <Grid item xs={12} className="gridItem">
            <FormControl fullWidth className="formInput">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={departmentValue}
                label="Department"
                onChange={departmentHandleChange}
                displayEmpty
                required
              >
                <MenuItem value="">Department</MenuItem>
                {department.map((e) => (
                  <MenuItem value={e} key={e}>
                    {e}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Button
            onClick={handlerSubmit}
            type="submit"
            variant="contained"
            style={{
              margin: "20px auto",
              width: "100px",
              height: "50px",
              backgroundColor: "#D8EC79",
              border: "2px #93AD18 solid",
              color: "#93AD18",
            }}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
}

export default CreateEmployeeForm;

const states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Federated States Of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const department = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

{
  /*         <SelectInput />

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">State</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleSelect}
            input={<OutlinedInput label="State" />}
            MenuProps={MenuProps}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField id="input-zipCode" label="Zip Code" type="number" />
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Department</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleSelect}
            input={<OutlinedInput label="Department" />}
            MenuProps={MenuProps}
          >
            {department.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */
}
