import TodosList from "@/app/todos/TodosList";
import CreateTodo from "@/app/todos/CreateTodo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        <CreateTodo />
        {/* @ts-ignore */}
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
