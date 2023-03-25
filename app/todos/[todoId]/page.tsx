import { notFound } from "next/navigation";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodoById = async (todoId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    // ISR in seconds:
    { next: { revalidate: 60 } }
  );

  const todo = await response.json();
  return todo;
};

export default async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodoById(todoId);

  // This is due to a bug with ISR/SSR. Imagine if we have 200 items and we search for 220th item. It would still show the page instead of showing a NotFound page
  if (!todo.id) return notFound();
  return (
    <div>
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>

      <p>By User: {todo.userId}</p>
    </div>
  );
}
