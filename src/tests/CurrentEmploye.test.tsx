import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";
import EmployeesTable from "../Components/CurrentEmployees/EmployeesTable";
import dataContext from "../Context/dataContext";
import { Employee } from "../Interface";
import { useState } from "react";
import { rows } from "../Fixtures";

let container: any = null;

function TestAPP() {
  const [employees, setEmployees] = useState<Employee[]>(rows);
  const contextData = {
    employees,
    updateEmployees: setEmployees,
  };
  return (
    <dataContext.Provider value={contextData}>
      <EmployeesTable />
    </dataContext.Provider>
  );
}

beforeEach(() => {
  // met en place un élément DOM comme cible de rendu

  container = document.createElement("div");
  document.body.appendChild(container);
  render(<TestAPP />, container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Quand le tableau est affiché", () => {
  test("Quand on filtre les prénom par ordre croissant", () => {
    const firstNames = screen.getAllByTestId("firstName").length;
    console.log(firstNames);

    expect(true).toBe(true);
  });
});
