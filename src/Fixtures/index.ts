import { Employee } from "../Interface";

export const initialValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  stateDate: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: "",
};

function createData(
  firstName: string,
  lastName: string,
  startDate: Date,
  department: string,
  dateOfBirth: Date,
  street: string,
  city: string,
  state: string,
  zipCode: number
): Employee {
  return {
    firstName,
    lastName,
    startDate,
    department,
    dateOfBirth,
    street,
    city,
    state,
    zipCode,
  };
}

export const rows = [
  createData(
    "Mccormick",
    "Puckett",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "881 Bedford Place",
    "Caberfae",
    "Websterville",
    10
  ),
  createData(
    "Cecilia",
    "Blair",
    new Date("2020-07-22"),
    "female",
    new Date("2020-08-22"),
    "106 Milton Street",
    "Kenwood",
    "Basye",
    65
  ),
  createData(
    "Alyssa",
    "Pitts",
    new Date("2020-06-22"),
    "female",
    new Date("2020-08-22"),
    "167 Ashford Street",
    "Noblestown",
    "Lavalette",
    56
  ),
  createData(
    "Vivian",
    "Harrington",
    new Date("2020-05-22"),
    "female",
    new Date("2020-08-22"),
    "230 Glendale Court",
    "Dola",
    "Ruckersville",
    15
  ),
];

export const department = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

export const states = [
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
