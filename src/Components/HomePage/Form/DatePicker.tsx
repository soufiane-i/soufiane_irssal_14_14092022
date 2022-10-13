import { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useContext, useState } from "react";
import dataContext from "../../../Context/dataContext";

type DatePickerProps = {
  placeholder: string;
};

function DatePicker(props: DatePickerProps) {
  const [value, setValue] = useState<Dayjs | null | string>("fefef");
  const contextData = useContext(dataContext);
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    if (props.placeholder == "Date of Birth") {
    } else if (props.placeholder == "Start Date") {
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          toolbarPlaceholder="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: `${props.placeholder}`,
              }}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default DatePicker;
