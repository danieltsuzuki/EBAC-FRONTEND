import { TypeItem } from "@/app/types/items.type";

export const initialTasks: TypeItem[] = [
  { id: "1790622383674", name: "Estudar Next.js 15" },
  { id: "1790622383675", name: "Escrever testes com Jest e RTL" },
  { id: "1790622383676", name: "Implementar Server e Client Components" },
];

export async function getTasks(): Promise<TypeItem[]> {
  // Simulação assíncrona de carregamento de tarefas sem API externa
  return Promise.resolve(initialTasks);
}
