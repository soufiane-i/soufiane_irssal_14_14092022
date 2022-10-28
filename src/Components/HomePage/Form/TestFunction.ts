export function TextFieldTest(
  regex: RegExp,
  value: string,
  isValue: React.MutableRefObject<boolean>,
  input: Element
) {
  if (regex.test(value)) {
    isValue.current = true;
    input.classList.remove("error");
  } else {
    isValue.current = false;
    input.classList.add("error");
  }
  console.log(isValue.current);
}

export function SelectTest(
  value: string,
  isValue: React.MutableRefObject<boolean>,
  input: Element
) {
  if (value != "") {
    isValue.current = true;
    input.classList.remove("error");
  } else {
    isValue.current = false;
    input.classList.add("error");
  }
  console.log(isValue.current);
}

export function DateTest(
  value: Date,
  isValue: React.MutableRefObject<boolean>,
  input: Element
) {
  if (value.toString() != "Invalid Date") {
    isValue.current = true;
    input.classList.remove("error");
  } else {
    isValue.current = false;
    input.classList.add("error");
  }
  console.log(isValue.current);
}
