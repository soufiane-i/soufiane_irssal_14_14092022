export interface Employee {
  firstName: string;
  lastName: string;
  startDate: Date;
  department: string;
  dateOfBirth: Date;
  street: string;
  city: string;
  state: string;
  zipCode: number;
}

export interface NavProps {
  refLink: string;
  text: string;
  arrowDirection: string;
}
