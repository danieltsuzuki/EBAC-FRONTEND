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
