import useContadorDeTarefas from "@/app/hooks/useContadorDeTarefas";
import { renderHook } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { TypeItem } from "@/app/types/items.type";

test("Deve contar quantos itens existem na lista de tarefas", () => {
  const itens: TypeItem[] = [
    { id: "1", name: "Tarefa 1" },
    { id: "2", name: "Tarefa 2" },
    { id: "3", name: "Tarefa 3" },
  ];
  const contador1 = renderHook(() => useContadorDeTarefas(itens)).result;
  expect(contador1.current).toBe(3);

  itens.push({ id: "4", name: "Tarefa 4" });

  const contadorAtualizado = renderHook(() =>
    useContadorDeTarefas(itens),
  ).result;
  expect(contadorAtualizado.current).toBe(4);

  itens.pop();
  itens.pop();
  itens.pop();
  itens.pop();

  const contadorZerado = renderHook(() => useContadorDeTarefas(itens)).result;
  expect(contadorZerado.current).toBe(0);

  const itens2: TypeItem[] = [];

  const contador2 = renderHook(() => useContadorDeTarefas(itens2)).result;
  expect(contador2.current).toBe(0);
});
