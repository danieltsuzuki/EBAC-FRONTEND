"use client";

import { useCallback, useState } from "react";
import Table from "../components/table";
import { TypeItem } from "../types/items.type";
import NovaTarefa from "../components/novaTarefa";
import useContadorDeTarefas from "../hooks/useContadorDeTarefas";

type PropsTodo = {
  initialItems?: TypeItem[];
};

export default function Todo({ initialItems = [] }: PropsTodo) {
  const [items, setItems] = useState<TypeItem[]>(initialItems);

  const onAddItem = useCallback((item: TypeItem): void => {
    setItems((prev) => [...prev, item]);
  }, []);

  const itemCount = useContadorDeTarefas(items);

  return (
    <main className="container mx-auto max-md:px-4 py-10 grid-cols-5 gap-4 grid-rows-3 grid min-h-[calc(100vh-100px)]">
      <NovaTarefa
        className="col-start-4 col-end-6 row-start-1 row-end-2 min-h-42"
        onAddItem={onAddItem}
      />
      <Table
        className="col-start-1 col-end-4 row-start-1 row-end-4"
        items={items}
        itemCount={itemCount}
      />
    </main>
  );
}
