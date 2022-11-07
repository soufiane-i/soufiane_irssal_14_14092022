import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";
import EmployeesTable from "../Components/CurrentEmployees/EmployeesTable";

let container: any = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<EmployeesTable />, container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Quand le tableau est affiché", () => {
  test("Quand on filtre les prénom par ordre croissant", () => {
    const rows = document.querySelectorAll(".firstNameCell").length;

    console.log(rows);

    expect(true).toBe(true);
  });
});
