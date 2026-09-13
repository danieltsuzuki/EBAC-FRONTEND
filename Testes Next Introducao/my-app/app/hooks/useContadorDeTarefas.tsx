import { useMemo } from "react";
import { TypeItem } from "../types/items.type";

export default function useContadorDeTarefas(itens: TypeItem[]) {
  return useMemo(() => itens.length, [itens]);
}
