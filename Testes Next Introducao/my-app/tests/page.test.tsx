import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Home from "@/app/page";
import { initialTasks } from "@/data/tasks";

test("Deve renderizar a página inicial com as tarefas simuladas do Server Component", async () => {
  const pageComponent = await Home();
  render(pageComponent);

  // Verifica se o título da tabela e os itens simulados são exibidos
  expect(screen.getByText("Tabela de ITENS")).toBeInTheDocument();
  expect(screen.getByText("Adicionar Item")).toBeInTheDocument();

  // Verifica se cada tarefa inicial da base simulada está presente na tela
  initialTasks.forEach((task) => {
    expect(screen.getByText(task.name)).toBeInTheDocument();
  });

  // Verifica o contador com a quantidade inicial
  expect(
    screen.getByText(`Total de itens: ${initialTasks.length}`)
  ).toBeInTheDocument();
});
