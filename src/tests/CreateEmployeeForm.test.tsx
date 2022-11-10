import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";

let container: any = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<App />, container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("L'utilisateur appuie sur le bouton submit", () => {
  describe("Les champs sont correctement remplis", () => {
    test("Étant donné que l'utilisateur a remplit correctement le champs du prénom, quand il clique sur le bouton Submit, alors la donnée est validé et le champs n'est pas rouge", () => {
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      const firstNameInput = screen.getByPlaceholderText(
        "First Name"
      ) as HTMLInputElement;
      const firstNameContainer = document.querySelector(
        ".firstNameContainer"
      ) as HTMLInputElement;

      fireEvent.change(firstNameInput, { target: { value: "sofiane" } });
      act(() => {
        fireEvent.click(submitButton);
      });

      expect(firstNameInput.value).toBe("sofiane");
      expect(firstNameContainer).not.toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit correctement le champs du nom, quand il clique sur le bouton Submit, alors la donnée est validé et le champs n'est pas rouge", () => {
      const lastNameInput = screen.getByPlaceholderText(
        "Last Name"
      ) as HTMLInputElement;
      const lastNameContainer = document.querySelector(
        ".lastNameContainer"
      ) as HTMLInputElement;
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      fireEvent.change(lastNameInput, { target: { value: "sofiane" } });
      act(() => {
        fireEvent.click(submitButton);
      });
      expect(lastNameInput.value).toBe("sofiane");
      expect(lastNameContainer).not.toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit correctement le champs de la date de naissance, quand il clique sur le bouton Submit, alors la donnée est validé et le champs n'est pas rouge", () => {
      const birthDateInput = screen.getByPlaceholderText(
        "Date of Birth"
      ) as HTMLInputElement;
      const birthDateContainer = document.querySelector(
        ".dateOfBirthContainer"
      ) as HTMLInputElement;
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;

      fireEvent.change(birthDateInput, { target: { value: "10/12/2022" } });

      act(() => {
        fireEvent.click(submitButton);
      });

      expect(birthDateInput.value).toBe("10/12/2022");
      expect(birthDateContainer).not.toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit correctement le champs de la date de départ, quand il clique sur le bouton Submit, alors la donnée est validé et le champs n'est pas rouge", () => {
      const startDateInput = screen.getByPlaceholderText(
        "Start Date"
      ) as HTMLInputElement;
      const startDateContainer = document.querySelector(
        ".startDateContainer"
      ) as HTMLInputElement;
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;

      fireEvent.change(startDateInput, { target: { value: "10/12/2022" } });

      act(() => {
        fireEvent.click(submitButton);
      });

      expect(startDateInput.value).toBe("10/12/2022");
      expect(startDateContainer).not.toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit correctement le champs de la rue, quand il clique sur le bouton Submit, alors la donnée est validé et le champs n'est pas rouge", () => {
      const streetInput = screen.getByPlaceholderText(
        "Street"
      ) as HTMLInputElement;
      const streetContainer = document.querySelector(
        ".streetContainer"
      ) as HTMLInputElement;
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      fireEvent.change(streetInput, { target: { value: "2 rue" } });
      act(() => {
        fireEvent.click(submitButton);
      });
      expect(streetInput.value).toBe("2 rue");
      expect(streetContainer).not.toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit correctement le champs de la ville, quand il clique sur le bouton Submit, alors la donnée est validé et le champs n'est pas rouge", () => {
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      const cityInput = screen.getByPlaceholderText("City") as HTMLInputElement;
      const cityContainer = document.querySelector(
        ".cityContainer"
      ) as HTMLInputElement;

      fireEvent.change(cityInput, { target: { value: "Paris5" } });
      act(() => {
        fireEvent.click(submitButton);
      });

      expect(cityInput.value).toBe("Paris5");
      expect(cityContainer).not.toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit correctement le champs d'etat, quand il clique sur le bouton Submit, alors la donnée est validé et le champs n'est pas rouge", () => {
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      const stateContainer = document.querySelector(
        ".stateContainer"
      ) as HTMLInputElement;
      const selectInput = screen.getByTestId(
        "statesState"
      ) as HTMLButtonElement;

      act(() => {
        fireEvent.click(selectInput);
      });
      const options = screen.getByTestId("Alabama");

      act(() => {
        fireEvent.click(options);
      });
      const spanValue = screen.getByTestId("stateSpan") as HTMLElement;
      act(() => {
        fireEvent.click(submitButton);
      });
      expect(spanValue).toHaveTextContent("Alabama");
      expect(stateContainer).not.toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit correctement le champs du zip code, quand il clique sur le bouton Submit, alors la donnée est validé et le champs n'est pas rouge", () => {
      const zipCodeInput = screen.getByPlaceholderText(
        "Zip Code"
      ) as HTMLInputElement;
      const zipCodeContainer = document.querySelector(
        ".zipCodeContainer"
      ) as HTMLInputElement;
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;

      act(() => {
        fireEvent.change(zipCodeInput, { target: { value: 12 } });
      });
      act(() => {
        fireEvent.click(submitButton);
      });
      expect(zipCodeInput.value).toBe("12");
      expect(zipCodeContainer).not.toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit correctement le champs du departement, quand il clique sur le bouton Submit, alors la donnée est validé et le champs n'est pas rouge", () => {
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      const departmentContainer = document.querySelector(
        ".departmentContainer"
      ) as HTMLInputElement;
      const selectInput = screen.getByTestId(
        "departmentState"
      ) as HTMLButtonElement;

      act(() => {
        fireEvent.click(selectInput);
      });
      const options = screen.getByTestId("Sales");

      act(() => {
        fireEvent.click(options);
      });
      const spanValue = screen.getByTestId("departmentSpan") as HTMLElement;
      act(() => {
        fireEvent.click(submitButton);
      });
      expect(spanValue).toHaveTextContent("Sales");
      expect(departmentContainer).not.toHaveClass("error");
    });

    test("Tous les champs sont correctement remplis, quand l'utilisateur clique sur le bouton Submit, la modale de confirmation apparait", () => {
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      const firstNameInput = screen.getByPlaceholderText(
        "First Name"
      ) as HTMLInputElement;

      fireEvent.change(firstNameInput, { target: { value: "sofiane" } });
      act(() => {
        fireEvent.click(submitButton);
      });

      const lastNameInput = screen.getByPlaceholderText(
        "Last Name"
      ) as HTMLInputElement;
      fireEvent.change(lastNameInput, { target: { value: "sofiane" } });
      act(() => {
        fireEvent.click(submitButton);
      });

      const birthDateInput = screen.getByPlaceholderText(
        "Date of Birth"
      ) as HTMLInputElement;

      fireEvent.change(birthDateInput, { target: { value: "10/12/2022" } });

      act(() => {
        fireEvent.click(submitButton);
      });

      const startDateInput = screen.getByPlaceholderText(
        "Start Date"
      ) as HTMLInputElement;

      fireEvent.change(startDateInput, { target: { value: "10/12/2022" } });

      act(() => {
        fireEvent.click(submitButton);
      });

      const streetInput = screen.getByPlaceholderText(
        "Street"
      ) as HTMLInputElement;

      fireEvent.change(streetInput, { target: { value: "2 rue" } });
      act(() => {
        fireEvent.click(submitButton);
      });

      const cityInput = screen.getByPlaceholderText("City") as HTMLInputElement;

      fireEvent.change(cityInput, { target: { value: "Paris5" } });
      act(() => {
        fireEvent.click(submitButton);
      });

      const selectInput = screen.getByTestId(
        "statesState"
      ) as HTMLButtonElement;

      act(() => {
        fireEvent.click(selectInput);
      });
      const options = screen.getByTestId("Alabama");

      act(() => {
        fireEvent.click(options);
      });

      const zipCodeInput = screen.getByPlaceholderText(
        "Zip Code"
      ) as HTMLInputElement;

      act(() => {
        fireEvent.change(zipCodeInput, { target: { value: 12 } });
      });
      act(() => {
        fireEvent.click(submitButton);
      });

      const departmentInput = screen.getByTestId(
        "departmentState"
      ) as HTMLButtonElement;

      act(() => {
        fireEvent.click(departmentInput);
      });
      const departmentOptions = screen.getByTestId("Sales");

      act(() => {
        fireEvent.click(departmentOptions);
      });
      act(() => {
        fireEvent.click(submitButton);
      });

      const modal = document.querySelector(".modalContainer");

      expect(modal).not.toHaveClass("modalOff");
    });
  });
  describe("Les champs sont incorrectement remplis", () => {
    test("Étant donné que l'utilisateur a remplit incorrectement le champs de la ville, quand il clique sur le bouton Submit, alors la donnée est invalidé et le champs devient rouge", () => {
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;

      act(() => {
        fireEvent.click(submitButton);
      });

      const modal = document.querySelector(".modalContainer");

      expect(modal).toHaveClass("modalOff");
    });
  });
});

test("Fermer la modal de confirmation", () => {
  const modal = document.querySelector(".modalContainer");

  act(() => {
    modal?.classList.remove("modalOff");
  });
  const cross = document.querySelector(".imgContainer")
    ?.childNodes[0] as HTMLInputElement;
  act(() => {
    fireEvent.click(cross);
  });

  expect(modal).toHaveClass("modalOff");
});
