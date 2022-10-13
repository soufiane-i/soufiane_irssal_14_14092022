import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useContext, useState } from "react";
import dataContext from "../../../Context/dataContext";
type SelectInputProps = {
  label: string;
};

function SelectInput(props: SelectInputProps): any {
  const [useName, setUseName] = useState("");
  const contextData = useContext(dataContext);
  const handleChange = (event: SelectChangeEvent) => {
    setUseName(event.target.value as string);
    if (props.label == "States") {
    } else if (props.label == "Department") {
    }
  };

  if (props.label == "States") {
    return (
      <FormControl fullWidth className="formInput">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={useName}
          label={`${props.label}`}
          onChange={handleChange}
          displayEmpty
          required
        >
          <MenuItem value="">{props.label}</MenuItem>
          {states.map((e) => (
            <MenuItem value={e} key={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else if (props.label == "Department") {
    return (
      <FormControl fullWidth className="formInput">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={useName}
          label={`${props.label}`}
          onChange={handleChange}
          displayEmpty
          required
        >
          <MenuItem value="">{props.label}</MenuItem>
          {department.map((e) => (
            <MenuItem value={e} key={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default SelectInput;

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
