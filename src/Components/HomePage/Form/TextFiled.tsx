import { Input, TextField } from "@mui/material";

type TextFieldInputProps = {
  label: string;
  type: string;
  value: string;
  name: string;
  onChange: any;
};

function TextFieldInput(props: TextFieldInputProps) {
  return (
    <Input
      className="formInput"
      id={props.name}
      placeholder={props.label}
      type={props.type}
      value={props.value}
      name={props.name}
      required
      error={false}
      onChange={props.onChange}
      fullWidth
    />
  );
}

export default TextFieldInput;
