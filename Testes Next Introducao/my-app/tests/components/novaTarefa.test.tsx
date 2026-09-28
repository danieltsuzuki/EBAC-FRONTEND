import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import NovaTarefa from "../../app/components/novaTarefa";

test("Deve renderizar o componente NovaTarefa e adicionar um item", () => {
  const mockOnAddItem = jest.fn();
  render(<NovaTarefa onAddItem={mockOnAddItem} />);
  expect(screen.getByText("Adicionar Item")).toBeInstanceOf(HTMLLegendElement);
  expect(screen.getByDisplayValue("")).toBeInstanceOf(HTMLInputElement);
  expect(mockOnAddItem).not.toHaveBeenCalled();

  const input = screen.getByLabelText("Nome*");
  const button = screen.getByText("Salvar");

  fireEvent.change(input, { target: { value: "Tarefa 1" } });
  fireEvent.click(button);

  expect(mockOnAddItem).toHaveBeenCalledWith({
    id: expect.any(String),
    name: "Tarefa 1",
  });
});

test("Deve exibir mensagem de erro ao tentar adicionar um item com nome vazio", () => {
  const mockOnAddItem = jest.fn();
  render(<NovaTarefa onAddItem={mockOnAddItem} />);
  const button = screen.getByText("Salvar");

  fireEvent.click(button);
  expect(mockOnAddItem).not.toHaveBeenCalled();
  expect(screen.getByText("Por favor, insira um nome válido.")).toBeInstanceOf(
    HTMLElement,
  );
});

test("Deve limpar o campo de texto e mensagens de erro ao clicar no botão Cancelar", () => {
  const mockOnAddItem = jest.fn();
  render(<NovaTarefa onAddItem={mockOnAddItem} />);

  const input = screen.getByLabelText("Nome*") as HTMLInputElement;
  const cancelButton = screen.getByText("Cancelar") as HTMLButtonElement;
  const saveButton = screen.getByText("Salvar");

  // Garante que o botão Cancelar tem explicitamente type='button' para não submeter formulário
  expect(cancelButton.type).toBe("button");

  // Simula erro ao tentar salvar vazio
  fireEvent.click(saveButton);
  expect(screen.getByText("Por favor, insira um nome válido.")).toBeInTheDocument();

  // Digita algo e clica em cancelar
  fireEvent.change(input, { target: { value: "Tarefa Cancelada" } });
  expect(input.value).toBe("Tarefa Cancelada");

  fireEvent.click(cancelButton);

  expect(input.value).toBe("");
  expect(screen.queryByText("Por favor, insira um nome válido.")).not.toBeInTheDocument();
  expect(mockOnAddItem).not.toHaveBeenCalled();
});
