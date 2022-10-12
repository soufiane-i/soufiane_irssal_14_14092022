import { useState } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import SearchBar from "material-ui-search-bar";

interface Data {
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
): Data {
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

const rows = [
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
  /*   createData(
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
  createData(
    "Savannah",
    "Johns",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "626 Nova Court",
    "Wedgewood",
    "Holtville",
    66
  ),
  createData(
    "Kaye",
    "Lowe",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "865 Columbia Street",
    "Lacomb",
    "Brenton",
    52
  ),
  createData(
    "Sherry",
    "Payne",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "936 Baycliff Terrace",
    "Odessa",
    "Hachita",
    23
  ),
  createData(
    "Carolyn",
    "Bryan",
    new Date("2020-09-22"),
    "female",
    new Date("2020-08-22"),
    "407 Clove Road",
    "Brule",
    "Volta",
    25
  ),
  createData(
    "Harris",
    "Britt",
    new Date("2020-10-22"),
    "male",
    new Date("2020-08-22"),
    "783 Truxton Street",
    "Jacksonburg",
    "Churchill",
    57
  ),
  createData(
    "Rios",
    "Prince",
    new Date("2020-11-22"),
    "male",
    new Date("2020-08-22"),
    "581 Bradford Street",
    "Camptown",
    "Morriston",
    74
  ),
  createData(
    "Kaufman",
    "Espinoza",
    new Date("2020-12-22"),
    "male",
    new Date("2020-08-22"),
    "294 Paerdegat Avenue",
    "Crayne",
    "Manchester",
    67
  ),
  createData(
    "Schwartz",
    "Fleming",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "544 Ocean Avenue",
    "Northchase",
    "Laurelton",
    34
  ),
  createData(
    "Brandy",
    "Tillman",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "615 Woodrow Court",
    "Roderfield",
    "Day",
    80
  ),
  createData(
    "Maura",
    "Witt",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "131 McKibben Street",
    "Watrous",
    "Hasty",
    63
  ),
  createData(
    "Ward",
    "Mckenzie",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "132 Strauss Street",
    "Savannah",
    "Dodge",
    7
  ),
  createData(
    "Brandie",
    "Strickland",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "124 Monroe Place",
    "Tampico",
    "Croom",
    45
  ),
  createData(
    "Hendricks",
    "Sexton",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "578 Ford Street",
    "Lynn",
    "Hiwasse",
    80
  ),
  createData(
    "Katheryn",
    "Munoz",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "656 Melrose Street",
    "Blodgett",
    "Ahwahnee",
    38
  ),
  createData(
    "Thornton",
    "Gillespie",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "407 Cyrus Avenue",
    "Charco",
    "Forbestown",
    69
  ),
  createData(
    "Sabrina",
    "Weeks",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "734 Bijou Avenue",
    "Elfrida",
    "Delco",
    95
  ),
  createData(
    "Tanisha",
    "Woods",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "628 Quentin Street",
    "Worcester",
    "Jennings",
    6
  ),
  createData(
    "Alexis",
    "Doyle",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "149 Olive Street",
    "Stagecoach",
    "Hatteras",
    56
  ),
  createData(
    "Ana",
    "Lindsey",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "187 Louisa Street",
    "Corinne",
    "Walton",
    45
  ),
  createData(
    "Jarvis",
    "Raymond",
    new Date("2020-08-22"),
    "male",
    new Date("2020-07-22"),
    "610 Sheffield Avenue",
    "Drytown",
    "Waverly",
    93
  ),
  createData(
    "Judith",
    "Ford",
    new Date("2020-08-22"),
    "female",
    new Date("2020-06-22"),
    "958 Strickland Avenue",
    "Bynum",
    "Vienna",
    34
  ),
  createData(
    "Maddox",
    "Klein",
    new Date("2020-08-22"),
    "male",
    new Date("2020-05-22"),
    "507 High Street",
    "Spokane",
    "Coyote",
    63
  ),
  createData(
    "Garrison",
    "Kaufman",
    new Date("2020-08-22"),
    "male",
    new Date("2020-04-22"),
    "953 Holmes Lane",
    "Harold",
    "Lorraine",
    2
  ),
  createData(
    "Tracy",
    "Yates",
    new Date("2020-08-22"),
    "female",
    new Date("2020-03-22"),
    "201 Amity Street",
    "Chalfant",
    "Berlin",
    42
  ),
  createData(
    "Joy",
    "Robertson",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "621 Lenox Road",
    "Veguita",
    "Berwind",
    14
  ),
  createData(
    "Melinda",
    "Hays",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "448 Georgia Avenue",
    "Fairmount",
    "Bluffview",
    91
  ),
  createData(
    "Hammond",
    "Brewer",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "106 Waldane Court",
    "Matthews",
    "Osage",
    95
  ),
  createData(
    "Luz",
    "Gardner",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "848 Falmouth Street",
    "Bayview",
    "Dundee",
    24
  ),
  createData(
    "Bullock",
    "Dorsey",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "534 Regent Place",
    "Staples",
    "Kerby",
    94
  ),
  createData(
    "Rachelle",
    "Lee",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "860 Madoc Avenue",
    "Wakarusa",
    "Baker",
    41
  ),
  createData(
    "Lloyd",
    "French",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "471 Powers Street",
    "Lloyd",
    "Roberts",
    38
  ),
  createData(
    "Estela",
    "Crosby",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "686 Aitken Place",
    "Warren",
    "Silkworth",
    48
  ),
  createData(
    "Erika",
    "Figueroa",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "599 Elm Place",
    "Vicksburg",
    "Springdale",
    85
  ),
  createData(
    "Clarissa",
    "Osborn",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "232 Willow Place",
    "Belva",
    "Grapeview",
    3
  ),
  createData(
    "Janie",
    "Greer",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "576 Monroe Street",
    "Fairacres",
    "Carlos",
    51
  ),
  createData(
    "Michael",
    "Santiago",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "795 President Street",
    "Gambrills",
    "Balm",
    41
  ),
  createData(
    "Carney",
    "Bell",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "136 Crystal Street",
    "Choctaw",
    "Efland",
    29
  ),
  createData(
    "Pansy",
    "Gallagher",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "503 Metrotech Courtr",
    "Wolcott",
    "Barronett",
    55
  ),
  createData(
    "Atkinson",
    "Greene",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "767 Norman Avenue",
    "Reinerton",
    "Clarence",
    72
  ),
  createData(
    "Ericka",
    "Norton",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "232 Willmohr Street",
    "Clay",
    "Taycheedah",
    98
  ),
  createData(
    "Roberts",
    "Mckay",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "718 Rochester Avenue",
    "Nanafalia",
    "Ironton",
    34
  ),
  createData(
    "Fern",
    "Stone",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "527 Division Avenue",
    "Thomasville",
    "Advance",
    73
  ),
  createData(
    "Cynthia",
    "Workman",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "463 Clara Street",
    "Moscow",
    "Yukon",
    98
  ),
  createData(
    "Knowles",
    "Decker",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "643 Saratoga Avenue",
    "Craig",
    "Limestone",
    1
  ),
  createData(
    "Myra",
    "Hale",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "501 Clifton Place",
    "Winston",
    "Harrison",
    85
  ),
  createData(
    "Sophia",
    "Townsend",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "164 Martense Street",
    "Vale",
    "Waikele",
    36
  ),
  createData(
    "Rhea",
    "Ramos",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "210 Erasmus Street",
    "Graball",
    "Stewartville",
    28
  ),
  createData(
    "Stevenson",
    "Carver",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "666 Oliver Street",
    "Woodlake",
    "Nogal",
    26
  ),
  createData(
    "Carole",
    "Mathis",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "174 Horace Court",
    "Chase",
    "Malott",
    72
  ),
  createData(
    "Alma",
    "Moon",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "743 Ryder Avenue",
    "Hardyville",
    "Bawcomville",
    22
  ),
  createData(
    "Sosa",
    "Hobbs",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "688 Stuart Street",
    "Jenkinsville",
    "Zortman",
    77
  ),
  createData(
    "Beck",
    "Bailey",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "418 Huron Street",
    "Helen",
    "Coral",
    99
  ),
  createData(
    "Eva",
    "Rowland",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "293 Grove Street",
    "Wacissa",
    "Bend",
    83
  ),
  createData(
    "Davenport",
    "Pate",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "785 Lafayette Walk",
    "Winfred",
    "Hoagland",
    75
  ),
  createData(
    "Patel",
    "Montoya",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "737 Corbin Place",
    "Sidman",
    "Chamberino",
    7
  ),
  createData(
    "Lois",
    "Hickman",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "611 Bayard Street",
    "Haring",
    "Morgandale",
    75
  ),
  createData(
    "Bobbi",
    "Mooney",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "404 Hubbard Street",
    "Gilgo",
    "Frystown",
    97
  ),
  createData(
    "Ann",
    "Gibson",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "364 Amherst Street",
    "Sutton",
    "Sabillasville",
    63
  ),
  createData(
    "Becker",
    "Holden",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "643 Dorchester Road",
    "Florence",
    "Groton",
    44
  ),
  createData(
    "Foley",
    "Ewing",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "772 Ira Court",
    "Ernstville",
    "Nadine",
    16
  ),
  createData(
    "Deena",
    "Abbott",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "420 Harbor Lane",
    "Sunriver",
    "Morningside",
    13
  ),
  createData(
    "Kerri",
    "Forbes",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "578 Bragg Street",
    "Rosewood",
    "Delwood",
    2
  ),
  createData(
    "Cathy",
    "Mejia",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "829 Brightwater Court",
    "Lowell",
    "Rose",
    7
  ),
  createData(
    "Betsy",
    "Rich",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "761 Lott Place",
    "Cataract",
    "Statenville",
    24
  ),
  createData(
    "Debora",
    "Simpson",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "994 Aviation Road",
    "Longbranch",
    "Campo",
    17
  ),
  createData(
    "Burris",
    "Lott",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "593 Forrest Street",
    "Gouglersville",
    "Selma",
    64
  ),
  createData(
    "Ayala",
    "Cross",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "659 Varet Street",
    "Turah",
    "Joppa",
    39
  ),
  createData(
    "Davis",
    "Perry",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "146 Garfield Place",
    "Gerton",
    "Ypsilanti",
    34
  ),
  createData(
    "Bertie",
    "Mccullough",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "670 Berkeley Place",
    "Kirk",
    "Jugtown",
    32
  ),
  createData(
    "Pam",
    "Wheeler",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "809 Nevins Street",
    "Dennard",
    "Soham",
    7
  ),
  createData(
    "Elisabeth",
    "Higgins",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "262 Cooke Court",
    "Wiscon",
    "Westboro",
    20
  ),
  createData(
    "Jill",
    "Francis",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "602 Lawrence Avenue",
    "Chaparrito",
    "Boyd",
    73
  ),
  createData(
    "Bauer",
    "Short",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "725 Chester Court",
    "Klagetoh",
    "Martinez",
    89
  ),
  createData(
    "Boyer",
    "Watts",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "865 Midwood Street",
    "Williston",
    "Innsbrook",
    13
  ),
  createData(
    "Farmer",
    "Pace",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "971 Lamont Court",
    "Eagleville",
    "Fowlerville",
    47
  ),
  createData(
    "Harvey",
    "Aguirre",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "631 Florence Avenue",
    "Dorneyville",
    "Hillsboro",
    38
  ),
  createData(
    "Angelique",
    "Chen",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "293 Glen Street",
    "Villarreal",
    "Chicopee",
    85
  ),
  createData(
    "Short",
    "Gregory",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "694 Winthrop Street",
    "Winesburg",
    "Bainbridge",
    42
  ),
  createData(
    "Evans",
    "Webster",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "833 Kenmore Court",
    "Skyland",
    "Sena",
    45
  ),
  createData(
    "Kimberley",
    "Valenzuela",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "548 Havemeyer Street",
    "Adelino",
    "Kula",
    6
  ),
  createData(
    "Susana",
    "Walker",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "857 Atlantic Avenue",
    "Talpa",
    "Ronco",
    41
  ),
  createData(
    "Faith",
    "Navarro",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "922 Ovington Court",
    "Eggertsville",
    "Movico",
    45
  ),
  createData(
    "Celina",
    "Robles",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "335 Heath Place",
    "Grill",
    "Nicut",
    54
  ),
  createData(
    "Kristine",
    "Rocha",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "917 Gunnison Court",
    "Marne",
    "Harleigh",
    26
  ),
  createData(
    "Head",
    "Welch",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "418 Ralph Avenue",
    "Strykersville",
    "Washington",
    85
  ),
  createData(
    "Hanson",
    "Wilkins",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "264 Canton Court",
    "Shelby",
    "Hondah",
    32
  ),
  createData(
    "Sutton",
    "Burke",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "173 Remsen Street",
    "Juntura",
    "Idledale",
    93
  ),
  createData(
    "Dolly",
    "Riddle",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "727 Herkimer Street",
    "Cliff",
    "Newcastle",
    12
  ),
  createData(
    "Deanne",
    "Steele",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "575 Varick Street",
    "Kidder",
    "Bladensburg",
    29
  ),
  createData(
    "Queen",
    "Tyler",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "431 Stewart Street",
    "Russellville",
    "Jeff",
    27
  ),
  createData(
    "Rojas",
    "Bennett",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "433 Village Court",
    "Barclay",
    "Cloverdale",
    64
  ),
  createData(
    "Lila",
    "Nelson",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "529 Wythe Place",
    "Montura",
    "Blanco",
    40
  ),
  createData(
    "Huffman",
    "Glenn",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "203 Seeley Street",
    "Hiseville",
    "Dixie",
    16
  ),
  createData(
    "Kara",
    "Spence",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "942 Fleet Walk",
    "Madrid",
    "Fairlee",
    27
  ),
  createData(
    "Montoya",
    "Bauer",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "253 Pilling Street",
    "Woodburn",
    "Wilmington",
    97
  ),
  createData(
    "Shaffer",
    "Lyons",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "766 Independence Avenue",
    "Saticoy",
    "Tuttle",
    37
  ),
  createData(
    "Juliana",
    "Blake",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "167 Cadman Plaza",
    "Cumminsville",
    "Crumpler",
    14
  ),
  createData(
    "Johnnie",
    "Giles",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "102 Louise Terrace",
    "Alafaya",
    "Sunbury",
    26
  ),
  createData(
    "Fanny",
    "Hoover",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "396 Willow Street",
    "Leola",
    "Beyerville",
    35
  ),
  createData(
    "Bass",
    "Chase",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "478 Howard Avenue",
    "Glenville",
    "Twilight",
    1
  ),
  createData(
    "Valencia",
    "Maynard",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "498 Riverdale Avenue",
    "Adamstown",
    "Byrnedale",
    92
  ),
  createData(
    "Hopper",
    "Mccray",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "328 Norfolk Street",
    "Century",
    "Knowlton",
    78
  ),
  createData(
    "Leonor",
    "Cantrell",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "697 Tampa Court",
    "Orick",
    "Jamestown",
    54
  ),
  createData(
    "Shauna",
    "Howell",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "550 Cove Lane",
    "Dale",
    "Gadsden",
    87
  ),
  createData(
    "Mcfarland",
    "Mason",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "359 Linwood Street",
    "Ballico",
    "Martinsville",
    55
  ),
  createData(
    "Cunningham",
    "Franklin",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "769 Putnam Avenue",
    "Waumandee",
    "Oretta",
    42
  ),
  createData(
    "Angeline",
    "Vang",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "127 Glenmore Avenue",
    "Cascades",
    "Waterloo",
    32
  ),
  createData(
    "Sherri",
    "Winters",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "160 Columbus Place",
    "Lydia",
    "Gila",
    61
  ),
  createData(
    "Kim",
    "Malone",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "894 Eagle Street",
    "Austinburg",
    "Lodoga",
    49
  ),
  createData(
    "French",
    "Herring",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "188 Quincy Street",
    "Allamuchy",
    "Dawn",
    47
  ),
  createData(
    "Candace",
    "Tanner",
    new Date("2020-08-22"),
    "female",
    new Date("2020-08-22"),
    "357 Luquer Street",
    "Drummond",
    "Leming",
    26
  ),
  createData(
    "Maxwell",
    "Schultz",
    new Date("2020-08-22"),
    "male",
    new Date("2020-08-22"),
    "450 Eaton Court",
    "Fruitdale",
    "Remington",
    45
  ), */
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string | Date },
  b: { [key in Key]: number | string | Date }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "firstName",
    numeric: false,
    disablePadding: false,
    label: "FirstName",
  },
  {
    id: "lastName",
    numeric: true,
    disablePadding: false,
    label: "LastName",
  },
  {
    id: "startDate",
    numeric: true,
    disablePadding: false,
    label: "Start Date",
  },
  {
    id: "department",
    numeric: true,
    disablePadding: false,
    label: "Department",
  },
  {
    id: "dateOfBirth",
    numeric: true,
    disablePadding: false,
    label: "Date Of Birth",
  },
  {
    id: "street",
    numeric: false,
    disablePadding: false,
    label: "Street",
  },
  {
    id: "city",
    numeric: true,
    disablePadding: false,
    label: "City",
  },
  {
    id: "state",
    numeric: true,
    disablePadding: false,
    label: "State",
  },
  {
    id: "zipCode",
    numeric: true,
    disablePadding: false,
    label: "Zip Code",
  },
];

interface EmployeesTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EmployeesTableHead(props: EmployeesTableProps) {
  const {
    order,
    orderBy,

    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            padding={"normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EmployeesTable() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("zipCode");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsAct, setRowsAct] = useState<Data[]>(rows);
  const [searched, setSearched] = useState<string>("");

  const requestSearch = (searchedVal: string) => {
    const filteredRows = rows.filter((row) => {
      return (
        row.firstName.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.lastName.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.startDate
          .toString()
          .toLowerCase()
          .includes(searchedVal.toLowerCase()) ||
        row.department.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.dateOfBirth
          .toString()
          .toLowerCase()
          .includes(searchedVal.toLowerCase()) ||
        row.street.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.city.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.state.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.zipCode.toString().toLowerCase().includes(searchedVal.toLowerCase())
      );
    });
    setRowsAct(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.firstName);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <h2>Employee List</h2>
      <Box sx={{ width: "90%", mx: "auto" }}>
        <div className="tableHead">
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
          />
        </div>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EmployeesTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {rowsAct
                  .slice()
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow>
                        <TableCell align="left">{row.firstName}</TableCell>
                        <TableCell align="left">{row.lastName}</TableCell>
                        <TableCell align="left">
                          {`${row.startDate.getDay()}-${row.startDate.getMonth()}-${row.startDate.getFullYear()}`}
                        </TableCell>
                        <TableCell align="left">{row.department}</TableCell>
                        <TableCell align="left">{`${row.dateOfBirth.getDay()}-${row.dateOfBirth.getMonth()}-${row.dateOfBirth.getFullYear()}`}</TableCell>
                        <TableCell align="left">{row.street}</TableCell>
                        <TableCell align="left">{row.city}</TableCell>
                        <TableCell align="left">{row.state}</TableCell>
                        <TableCell align="left">{row.zipCode}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
}
