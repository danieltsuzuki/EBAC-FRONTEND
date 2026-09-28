import Todo from "./page/todo";
import { getTasks } from "@/data/tasks";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <div>
      <Todo initialItems={tasks} />
    </div>
  );
}
