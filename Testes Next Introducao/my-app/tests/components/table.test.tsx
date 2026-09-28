import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Table from "@/app/components/table";
import { TypeItem } from "@/app/types/items.type";

test("Deve renderizar a tabela vazia quando não houver itens", () => {
  render(<Table items={[]} itemCount={0} />);

  expect(screen.getByText("Tabela de ITENS")).toBeInTheDocument();
  expect(screen.getByText("Nenhum item encontrado.")).toBeInTheDocument();
  expect(screen.queryByText(/Total de itens:/)).not.toBeInTheDocument();
});

test("Deve renderizar a lista de itens e o total de tarefas corretamente", () => {
  const mockItems: TypeItem[] = [
    { id: "1", name: "Estudar React" },
    { id: "2", name: "Configurar Jest" },
  ];

  render(<Table items={mockItems} itemCount={mockItems.length} />);

  expect(screen.getByText("Estudar React")).toBeInTheDocument();
  expect(screen.getByText("Configurar Jest")).toBeInTheDocument();
  expect(screen.getByText("Total de itens: 2")).toBeInTheDocument();
});
