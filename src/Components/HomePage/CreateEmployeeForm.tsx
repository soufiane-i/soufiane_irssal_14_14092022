import { Button, Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import DatePicker from "./Form/DatePicker";
import SelectInput from "./Form/SelectInput";
import TextFieldInput from "./Form/TextFiled";

import { useForm, Form } from "./Form/useForm";

const initialValues = {
  firstName: "",
};

function CreateEmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextFieldInput
            id="input-firstName"
            label="FirstName"
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
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
