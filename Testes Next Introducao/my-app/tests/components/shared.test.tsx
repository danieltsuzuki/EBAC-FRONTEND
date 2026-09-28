import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Header from "@/app/components/shared/header";
import Footer from "@/app/components/shared/footer";

test("Deve renderizar o Header com o título correto", () => {
  render(<Header title="Meu Gerenciador de Tarefas" />);
  expect(screen.getByText("Meu Gerenciador de Tarefas")).toBeInTheDocument();
});

test("Deve renderizar o Footer com o título e ano correto", () => {
  render(<Footer title="Meu Gerenciador de Tarefas" />);
  const currentYear = new Date().getFullYear();
  expect(
    screen.getByText(new RegExp(`${currentYear} Meu Gerenciador de Tarefas`))
  ).toBeInTheDocument();
});
