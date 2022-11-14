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

test("Les données apparaisent dans le tableau", () => {
  const firstNames = screen.getAllByTestId("firstName");

  expect(firstNames.length).toBe(4);
});

describe("Quand le tableau est affiché", () => {
  describe("Quand on veut trier de manière croissante", () => {
    test("on filtre les prénoms par ordre croissant", () => {
      const firstNameFilter = document.querySelectorAll("th")[0]
        .firstChild as HTMLInputElement;

      let firstNamesArray: any[] = [];

      const firstNames = screen.getAllByTestId("firstName").forEach((e) => {
        firstNamesArray.push(e.textContent);
      });

      expect(firstNamesArray[0]).toBe("Alyssa");
    });
    test("on filtre les noms par ordre croissant", () => {
      const lastNameFilter = document.querySelectorAll("th")[1]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(lastNameFilter);
      });
      let lastNamesArray: any[] = [];

      const lastNames = screen.getAllByTestId("lastName").forEach((e) => {
        lastNamesArray.push(e.textContent);
      });
      console.log(lastNamesArray);

      expect(lastNamesArray[0]).toBe("Blair");
    });

    test("on filtre les departements par ordre croissant", () => {
      const departmentFilter = document.querySelectorAll("th")[3]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(departmentFilter);
      });
      let departmentsArray: any[] = [];

      const departments = screen.getAllByTestId("department").forEach((e) => {
        departmentsArray.push(e.textContent);
      });
      console.log(departmentsArray);

      expect(departmentsArray[0]).toBe("female");
    });

    test("on filtre les start date par ordre croissant", () => {
      const startDateFilter = document.querySelectorAll("th")[2]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(startDateFilter);
      });
      let startDatesArray: any[] = [];

      const startDates = screen.getAllByTestId("startDate").forEach((e) => {
        startDatesArray.push(e.textContent);
      });
      console.log(startDatesArray);

      expect(startDatesArray[0]).toBe("5-4-2020");
    });

    test("on filtre les departements par ordre croissant", () => {
      const departmentFilter = document.querySelectorAll("th")[3]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(departmentFilter);
      });
      let departmentsArray: any[] = [];

      const departments = screen.getAllByTestId("department").forEach((e) => {
        departmentsArray.push(e.textContent);
      });
      console.log(departmentsArray);

      expect(departmentsArray[0]).toBe("female");
    });

    test("on filtre les dates de naissances par ordre croissant", () => {
      const elementFilter = document.querySelectorAll("th")[4]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(elementFilter);
      });
      let elementsArray: any[] = [];

      const elements = screen.getAllByTestId("dateOfBirth").forEach((e) => {
        elementsArray.push(e.textContent);
      });
      console.log(elementsArray);

      expect(elementsArray[0]).toBe("6-7-2020");
    });

    test("on filtre les rues par ordre croissant", () => {
      const elementFilter = document.querySelectorAll("th")[5]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(elementFilter);
      });
      let elementsArray: any[] = [];

      const elements = screen.getAllByTestId("street").forEach((e) => {
        elementsArray.push(e.textContent);
      });
      console.log(elementsArray);

      expect(elementsArray[0]).toBe("106 Milton Street");
    });

    test("on filtre les villes par ordre croissant", () => {
      const elementFilter = document.querySelectorAll("th")[6]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(elementFilter);
      });
      let elementsArray: any[] = [];

      const elements = screen.getAllByTestId("city").forEach((e) => {
        elementsArray.push(e.textContent);
      });
      console.log(elementsArray);

      expect(elementsArray[0]).toBe("Caberfae");
    });

    test("on filtre les etats par ordre croissant", () => {
      const elementFilter = document.querySelectorAll("th")[7]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(elementFilter);
      });
      let elementsArray: any[] = [];

      const elements = screen.getAllByTestId("state").forEach((e) => {
        elementsArray.push(e.textContent);
      });
      console.log(elementsArray);

      expect(elementsArray[0]).toBe("Basye");
    });

    test("on filtre les zipcode par ordre croissant", () => {
      const elementFilter = document.querySelectorAll("th")[8]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(elementFilter);
      });
      let elementsArray: any[] = [];

      const elements = screen.getAllByTestId("zipCode").forEach((e) => {
        elementsArray.push(e.textContent);
      });
      console.log(elementsArray);

      expect(elementsArray[0]).toBe("10");
    });
  });

  describe("Quand on veut trier de manière décroissante", () => {
    test("on filtre les prénoms par ordre décroissant", () => {
      const firstNameFilter = document.querySelectorAll("th")[0]
        .firstChild as HTMLInputElement;

      act(() => {
        fireEvent.click(firstNameFilter);
      });
      let firstNamesArray: any[] = [];

      const firstNames = screen.getAllByTestId("firstName").forEach((e) => {
        firstNamesArray.push(e.textContent);
      });

      expect(firstNamesArray[0]).toBe("Vivian");
    });
  });
});

test("L'utilisateur écrit dans la barre de recherche", () => {
  const searchInput = screen.getByTestId("searchBar").childNodes[0];

  act(() => {
    fireEvent.change(searchInput, { target: { value: "Cecilia" } });
  });
  let firstNamesArray: any[] = [];
  const firstNames = screen.getAllByTestId("firstName").forEach((e) => {
    firstNamesArray.push(e.textContent);
  });

  expect(firstNamesArray[0]).toBe("Cecilia");
});
