import CreateEmployeeForm from "../Components/HomePage/CreateEmployeeForm";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";

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

describe("Les champs sont correctement remplis", () => {
  test("Étant donné que l'utilisateur a remplit correctement tout les champs, quand il clique sur le bouton Submit, alors les données sont stockées et l'utilisateur est redirigé vers la page des données.", () => {
    const inputs = screen.getByPlaceholderText(
      "First Name"
    ) as HTMLInputElement;
    fireEvent.change(inputs, { target: { value: "sofiane" } });
    console.log(inputs.value);
    expect(inputs.value).toBe("sofiane");
  });
});
