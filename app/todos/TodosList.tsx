import Link from "next/link";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await response.json();
  return todos;
};

export default async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo: any) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>
            Todo: {todo.id} - {todo.title}
          </Link>
        </p>
      ))}
    </>
  );
}

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await response.json();

  // To not get rate-limited by the API, prebuild only the first 10 pages:
  const trimmedTodos = todos.splice(0, 10);

  // [{ todoId: '1' }, { todoId: '2' }, ...]
  // return todos.map((todo: any) => ({
  return trimmedTodos.map((todo: any) => ({
    id: todo.id.toString(),
  }));
}
