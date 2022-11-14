import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import SearchBar from "material-ui-search-bar";
import { Employee } from "../../Interface";
import dataContext from "../../Context/dataContext";

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

interface HeadCell {
  disablePadding: boolean;
  id: keyof Employee;
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
    property: keyof Employee
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EmployeesTableHead(props: EmployeesTableProps) {
  const {
    order,
    orderBy,

    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Employee) => (event: React.MouseEvent<unknown>) => {
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
  const contextData = useContext(dataContext);
  console.log(contextData);

  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Employee>("firstName");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsAct, setRowsAct] = useState<Employee[]>(contextData.employees);
  const [searched, setSearched] = useState<string>("");

  const requestSearch = (searchedVal: string) => {
    const filteredRows = contextData.employees.filter((row) => {
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
    property: keyof Employee
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
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

  // Avoid a layout jump when reaching the last page with empty contextData.employees.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - contextData.employees.length)
      : 0;

  return (
    <>
      <h2>Employee List</h2>
      <Box sx={{ width: "90%", mx: "auto" }}>
        <div className="tableHead">
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={contextData.employees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            data-testid="searchBar"
          />
        </div>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EmployeesTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={contextData.employees.length}
              />
              <TableBody>
                {rowsAct
                  .slice()
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow>
                        <TableCell
                          aria-label="firstName"
                          align="left"
                          data-testid="firstName"
                        >
                          {row.firstName}
                        </TableCell>
                        <TableCell align="left" data-testid="lastName">
                          {row.lastName}
                        </TableCell>
                        <TableCell align="left" data-testid="startDate">
                          {`${row.startDate.getDay()}-${row.startDate.getMonth()}-${row.startDate.getFullYear()}`}
                        </TableCell>
                        <TableCell align="left" data-testid="department">
                          {row.department}
                        </TableCell>
                        <TableCell
                          align="left"
                          data-testid="dateOfBirth"
                        >{`${row.dateOfBirth.getDay()}-${row.dateOfBirth.getMonth()}-${row.dateOfBirth.getFullYear()}`}</TableCell>
                        <TableCell align="left" data-testid="street">
                          {row.street}
                        </TableCell>
                        <TableCell align="left" data-testid="city">
                          {row.city}
                        </TableCell>
                        <TableCell align="left" data-testid="state">
                          {row.state}
                        </TableCell>
                        <TableCell align="left" data-testid="zipCode">
                          {row.zipCode}
                        </TableCell>
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
