import { TextField } from "@mui/material";

type TextFieldInputProps = {
  id: string;
  label: string;
  type: string;
  value: string;
  name: string;
  onChange: any;
};

function TextFieldInput(props: TextFieldInputProps) {
  return (
    <TextField
      id={props.id}
      label={props.label}
      type={props.type}
      value={props.value}
      name={props.name}
      required
      error={false}
      helperText="incorrect entry"
      onChange={props.onChange}
    />
  );
}

export default TextFieldInput;
