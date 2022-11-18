import { useContext, useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Dayjs } from "dayjs";
import dataContext from "../../Context/dataContext";
import TextFieldInput from "./Form/TextFiled";
import { useForm } from "./Form/useForm";
import { Employee } from "../../Interface";
import { department, states, initialValues } from "../../Fixtures";
import { TextFieldTest, SelectTest, DateTest } from "./Form/TestFunction";
import { nameRegex, adressRegex, zipCodeRegex } from "./Form/Regex";

import SelectUnstyled from "@mui/base/SelectUnstyled";
import OptionUnstyled from "@mui/base/OptionUnstyled";

/**
 * Form for register employee
 * @returns CreateEmployeeForm Component
 */
function CreateEmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialValues);
  const [dateOfBirthData, setDateOfBirthValue] = useState<any>("");
  const [startDateData, setStartDateValue] = useState<any>("");
  const [stateValue, setStateValue] = useState<string>("");
  const [departmentValue, setDepartmentValue] = useState<string>("");

  const isFirstName = useRef(false);
  const isLastName = useRef(false);
  const isDateOfBirth = useRef(false);
  const isStartDate = useRef(false);
  const isStreet = useRef(false);
  const isCity = useRef(false);
  const isState = useRef(false);
  const isZipCode = useRef(false);
  const isDepartment = useRef(false);

  const contextData = useContext(dataContext);

  const dateOfBirthHandleChange = (newValue: Dayjs | null) => {
    setDateOfBirthValue(newValue);
  };

  const startDateHandleChange = (newValue: Dayjs | null) => {
    setStartDateValue(newValue);
  };

  const departmentHandleChange = (event: {
    target: { textContent: string };
  }) => {
    setDepartmentValue(event.target.textContent as string);
  };

  const stateHandleChange = (event: { target: { textContent: string } }) => {
    setStateValue(event.target.textContent as string);
  };

  const handlerSubmit = (e: any) => {
    e.preventDefault();

    function crossDown() {
      const modal = document.querySelector(".modalContainer");
      modal?.classList.add("modalOff");
    }

    const dateOfBirthValue: Date = new Date(
      `${dateOfBirthData.$y}-${dateOfBirthData.$M}-${dateOfBirthData.$D}`
    );
    const startDateValue: Date = new Date(
      `${startDateData.$y}-${startDateData.$M}-${startDateData.$D}`
    );

    const newData: Employee = {
      firstName: values.firstName,
      lastName: values.lastName,
      startDate: startDateValue,
      department: departmentValue,
      dateOfBirth: dateOfBirthValue,
      street: values.street,
      city: values.city,
      state: stateValue,
      zipCode: values.zipCode,
    };

    const formInputs = document.querySelectorAll(".css-1idn90j-MuiGrid-root");

    TextFieldTest(nameRegex, values.firstName, isFirstName, formInputs[0]);
    TextFieldTest(nameRegex, values.lastName, isLastName, formInputs[1]);
    DateTest(dateOfBirthValue, isDateOfBirth, formInputs[2]);
    DateTest(startDateValue, isStartDate, formInputs[3]);
    TextFieldTest(adressRegex, values.street, isStreet, formInputs[4]);
    TextFieldTest(adressRegex, values.city, isCity, formInputs[5]);
    SelectTest(stateValue, isState, formInputs[6]);
    TextFieldTest(zipCodeRegex, values.zipCode, isZipCode, formInputs[7]);
    SelectTest(departmentValue, isDepartment, formInputs[8]);

    if (
      isFirstName.current &&
      isLastName.current &&
      isDateOfBirth.current &&
      isStartDate.current &&
      isStreet.current &&
      isCity.current &&
      isZipCode.current &&
      isState.current &&
      isDepartment.current
    ) {
      contextData.employees.push(newData);
      contextData.updateEmployees([...contextData.employees]);

      const modal = document.querySelector(".modalContainer");
      const cross = document.querySelector(".imgContainer");

      cross?.addEventListener("keydown", crossDown);
      modal?.classList.remove("modalOff");
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
          <Grid item className="gridItem firstNameContainer" xs={12}>
            <TextFieldInput
              label="First Name"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} className="gridItem lastNameContainer">
            <TextFieldInput
              label="Last Name"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} className="gridItem dateOfBirthContainer">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  toolbarPlaceholder="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={dateOfBirthData}
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
          <Grid item xs={12} className="gridItem startDateContainer">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  toolbarPlaceholder="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={startDateData}
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
          <Grid xs={12} item className="gridItem streetContainer">
            <TextFieldInput
              label="Street"
              type="text"
              name="street"
              value={values.street}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid xs={12} item className="gridItem cityContainer">
            <TextFieldInput
              label="City"
              type="text"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            className="gridItem selectContainer stateContainer"
          >
            <InputLabel className="selectLabel">States</InputLabel>
            <FormControl fullWidth className="formInput selectInput">
              <SelectUnstyled
                onChange={(event: any) => {
                  stateHandleChange(event);
                }}
                className="selectUnstyled"
                defaultValue={""}
                data-testid="statesState"
                role="button"
                aria-label="select button"
              >
                <OptionUnstyled
                  className="selectOption"
                  value=""
                ></OptionUnstyled>
                {states.map((e) => (
                  <OptionUnstyled
                    className={`selectOption`}
                    data-testid={`${e}`}
                    value={e}
                    key={e}
                  >
                    <span data-testid="stateSpan">{e}</span>
                  </OptionUnstyled>
                ))}
              </SelectUnstyled>
            </FormControl>
          </Grid>
          <Grid xs={12} item className="gridItem zipCodeContainer">
            <TextFieldInput
              label="Zip Code"
              type="number"
              name="zipCode"
              value={values.zipCode}
              onChange={handleInputChange}
            />
          </Grid>
          <h3>Department</h3>
          <Grid
            item
            xs={12}
            className="gridItem selectContainer departmentContainer"
          >
            <InputLabel className="selectLabel">States</InputLabel>
            <FormControl fullWidth className="formInput selectInput">
              <SelectUnstyled
                onChange={(event: any) => {
                  departmentHandleChange(event);
                }}
                className="selectUnstyled"
                defaultValue={""}
                data-testid="departmentState"
                role="button"
                aria-label="select button"
              >
                <OptionUnstyled
                  className="selectOption"
                  value=""
                ></OptionUnstyled>
                {department.map((e) => (
                  <OptionUnstyled
                    className={`selectOption`}
                    data-testid={`${e}`}
                    value={e}
                    key={e}
                  >
                    <span data-testid="departmentSpan">{e}</span>
                  </OptionUnstyled>
                ))}
              </SelectUnstyled>
            </FormControl>
          </Grid>
          <Button
            onClick={handlerSubmit}
            type="submit"
            variant="contained"
            role="button"
            id="submitButton"
            aria-label="submit button"
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
