export function TextFieldTest(
  regex: RegExp,
  value: string,
  isValue: React.MutableRefObject<boolean>,
  input: Element
) {
  if (regex.test(value)) {
    isValue.current = true;
    input.classList.remove("error");
    console.log(isValue.current);

    console.log(input);

    console.log(isValue.current);
  } else {
    isValue.current = false;
    input.classList.add("error");
    console.log(input);

    console.log(isValue.current);
  }
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
}
