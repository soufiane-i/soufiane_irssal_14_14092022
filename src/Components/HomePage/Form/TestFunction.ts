/**
 * Test input content with regex
 * @param regex
 * @param value
 * @param isValue
 * @param input
 */
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
}

/**
 * Test select input content
 * @param value
 * @param isValue
 * @param input
 */
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

/**
 * Test of date input
 * @param value
 * @param isValue
 * @param input
 */
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
