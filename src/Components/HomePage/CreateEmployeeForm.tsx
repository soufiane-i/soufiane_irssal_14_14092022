import { Button, CardContent, Grid, TextField } from "@mui/material";
import dataContext from "../../Context/dataContext";
import DatePicker from "./Form/DatePicker";
import SelectInput from "./Form/SelectInput";
import TextFieldInput from "./Form/TextFiled";
import { useContext, useState } from "react";
import { useForm } from "./Form/useForm";
import { useNavigate } from "react-router-dom";
import { FirebaseDatabaseMutation } from "@react-firebase/database";

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
  const contextData = useContext(dataContext);
  console.log(contextData);

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    //contextData.updateEmployees([...contextData.employees, ])
    navigate("/employee-list");
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
            <DatePicker placeholder="Date of Birth" />
          </Grid>
          <Grid item xs={12} className="gridItem">
            <DatePicker placeholder="Start Date" />
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
            <SelectInput label="States" />
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
            <SelectInput label="Department" />
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
