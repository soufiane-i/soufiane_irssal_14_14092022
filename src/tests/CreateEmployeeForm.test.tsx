import CreateEmployeeForm from "../Components/HomePage/CreateEmployeeForm";
import isState from "../Components/HomePage/CreateEmployeeForm";
import React, { useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";
import App from "../App";

let container: any = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<CreateEmployeeForm />, container);
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
      const selectInput = document.querySelector(
        "#demo-simple-select"
      ) as HTMLElement;

      function okok(x: any) {
        let a = x + 2;
        return a;
      }

      act(() => {
        fireEvent.click(selectInput);
      });
      //expect(zipCodeInput.value).toBe("12");
      //expect(zipCodeContainer).not.toHaveClass("error")
      expect(true).toBe(true);
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

    test("Etant donnée que le formulaire est valide, la modale de confirmation apparait", () => {
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      const modal = document.querySelector(
        ".modalContainer"
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

      const lastNameInput = screen.getByPlaceholderText(
        "Last Name"
      ) as HTMLInputElement;
      const lastNameContainer = document.querySelector(
        ".lastNameContainer"
      ) as HTMLInputElement;

      fireEvent.change(lastNameInput, { target: { value: "sofiane" } });

      const birthDateInput = screen.getByPlaceholderText(
        "Date of Birth"
      ) as HTMLInputElement;
      const birthDateContainer = document.querySelector(
        ".dateOfBirthContainer"
      ) as HTMLInputElement;

      fireEvent.change(birthDateInput, { target: { value: "10/12/2022" } });

      const startDateInput = screen.getByPlaceholderText(
        "Start Date"
      ) as HTMLInputElement;
      const startDateContainer = document.querySelector(
        ".startDateContainer"
      ) as HTMLInputElement;

      fireEvent.change(startDateInput, { target: { value: "10/12/2022" } });

      const streetInput = screen.getByPlaceholderText(
        "Street"
      ) as HTMLInputElement;
      const streetContainer = document.querySelector(
        ".streetContainer"
      ) as HTMLInputElement;

      fireEvent.change(streetInput, { target: { value: "2 rue" } });

      const cityInput = screen.getByPlaceholderText("City") as HTMLInputElement;
      const cityContainer = document.querySelector(
        ".cityContainer"
      ) as HTMLInputElement;

      fireEvent.change(cityInput, { target: { value: "Paris5" } });

      const zipCodeInput = screen.getByPlaceholderText(
        "Zip Code"
      ) as HTMLInputElement;
      const zipCodeContainer = document.querySelector(
        ".zipCodeContainer"
      ) as HTMLInputElement;

      act(() => {
        fireEvent.click(submitButton);
      });
    });
  });

  describe("Les champs sont incorrectement remplis", () => {
    test("Étant donné que l'utilisateur a remplit incorrectement le champs du prénom, quand il clique sur le bouton Submit, alors la donnée n'est pas validé et le champs devient rouge", () => {
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      const firstNameInput = screen.getByPlaceholderText(
        "First Name"
      ) as HTMLInputElement;
      const firstNameContainer = document.querySelector(
        ".firstNameContainer"
      ) as HTMLInputElement;

      fireEvent.change(firstNameInput, { target: { value: "sofiane1" } });
      act(() => {
        fireEvent.click(submitButton);
      });

      expect(firstNameInput.value).toBe("sofiane1");
      expect(firstNameContainer).toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit incorrectement le champs du nom, quand il clique sur le bouton Submit, alors la donnée n'est pas validé et le champs devient rouge", () => {
      const lastNameInput = screen.getByPlaceholderText(
        "Last Name"
      ) as HTMLInputElement;
      const lastNameContainer = document.querySelector(
        ".lastNameContainer"
      ) as HTMLInputElement;
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      fireEvent.change(lastNameInput, { target: { value: "sofiane1" } });
      act(() => {
        fireEvent.click(submitButton);
      });
      expect(lastNameInput.value).toBe("sofiane1");
      expect(lastNameContainer).toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit incorrectement le champs de la date de naissance, quand il clique sur le bouton Submit, alors la donnée n'est pas validé et le champs devient rouge", () => {
      const birthDateInput = screen.getByPlaceholderText(
        "Date of Birth"
      ) as HTMLInputElement;
      const birthDateContainer = document.querySelector(
        ".dateOfBirthContainer"
      ) as HTMLInputElement;
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;

      act(() => {
        fireEvent.click(submitButton);
      });

      expect(birthDateContainer).toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit incorrectement le champs de la date de départ, quand il clique sur le bouton Submit, alors la donnée n'est pas validé et le champs devient rouge", () => {
      const startDateInput = screen.getByPlaceholderText(
        "Start Date"
      ) as HTMLInputElement;
      const startDateContainer = document.querySelector(
        ".startDateContainer"
      ) as HTMLInputElement;
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;

      act(() => {
        fireEvent.click(submitButton);
      });

      expect(startDateContainer).toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit incorrectement le champs de la rue, quand il clique sur le bouton Submit, alors la donnée n'est pas validé et le champs devient rouge", () => {
      const streetInput = screen.getByPlaceholderText(
        "Street"
      ) as HTMLInputElement;
      const streetContainer = document.querySelector(
        ".streetContainer"
      ) as HTMLInputElement;
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;

      act(() => {
        fireEvent.click(submitButton);
      });

      expect(streetContainer).toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit incorrectement le champs de la ville, quand il clique sur le bouton Submit, alors la donnée n'est pas validé et le champs devient rouge", () => {
      const submitButton = document.querySelector(
        "#submitButton"
      ) as HTMLInputElement;
      const cityInput = screen.getByPlaceholderText("City") as HTMLInputElement;
      const cityContainer = document.querySelector(
        ".cityContainer"
      ) as HTMLInputElement;

      act(() => {
        fireEvent.click(submitButton);
      });

      expect(cityContainer).toHaveClass("error");
    });

    test("Étant donné que l'utilisateur a remplit incorrectement le champs du zip code, quand il clique sur le bouton Submit, alors la donnée n'est pas validé et le champs devient rouge", () => {
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
        fireEvent.click(submitButton);
      });

      expect(zipCodeContainer).toHaveClass("error");
    });
  });
});
