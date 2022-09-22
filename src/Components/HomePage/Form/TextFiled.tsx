import { TextField } from "@mui/material";

type TextFieldInputProps = {
  id: string;
  label: string;
  type: string;
};

function TextFieldInput(props: TextFieldInputProps) {
  return <TextField id={props.id} label={props.label} type={props.type} />;
}

export default TextFieldInput;
