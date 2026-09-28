import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Todo from "@/app/page/todo";
import { TypeItem } from "@/app/types/items.type";

test("Deve executar o fluxo completo de adicionar tarefa, exibir na tabela e atualizar o contador", () => {
  const initialItems: TypeItem[] = [
    { id: "1", name: "Tarefa Existente 1" },
    { id: "2", name: "Tarefa Existente 2" },
  ];

  render(<Todo initialItems={initialItems} />);

  // Estado inicial
  expect(screen.getByText("Tarefa Existente 1")).toBeInTheDocument();
  expect(screen.getByText("Tarefa Existente 2")).toBeInTheDocument();
  expect(screen.getByText("Total de itens: 2")).toBeInTheDocument();

  // Preenche formulário
  const input = screen.getByLabelText("Nome*");
  const saveButton = screen.getByText("Salvar");

  fireEvent.change(input, { target: { value: "Nova Tarefa Integrada" } });
  fireEvent.click(saveButton);

  // Verifica se a nova tarefa está na tabela
  expect(screen.getByText("Nova Tarefa Integrada")).toBeInTheDocument();

  // Verifica se o contador de tarefas atualizou
  expect(screen.getByText("Total de itens: 3")).toBeInTheDocument();

  // Verifica se o campo de input foi limpo após submissão
  expect((input as HTMLInputElement).value).toBe("");
});

test("Deve iniciar com lista vazia e atualizar o contador conforme itens são adicionados", () => {
  render(<Todo initialItems={[]} />);

  // Estado vazio
  expect(screen.getByText("Nenhum item encontrado.")).toBeInTheDocument();
  expect(screen.queryByText(/Total de itens:/)).not.toBeInTheDocument();

  const input = screen.getByLabelText("Nome*");
  const saveButton = screen.getByText("Salvar");

  // Adiciona o primeiro item
  fireEvent.change(input, { target: { value: "Primeira Tarefa" } });
  fireEvent.click(saveButton);

  expect(screen.getByText("Primeira Tarefa")).toBeInTheDocument();
  expect(screen.queryByText("Nenhum item encontrado.")).not.toBeInTheDocument();
  expect(screen.getByText("Total de itens: 1")).toBeInTheDocument();
});
