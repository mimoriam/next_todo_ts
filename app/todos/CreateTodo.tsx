"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();

  const createTodo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        completed: false,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setTitle("");
    setBody("");

    console.log(await response.json());

    router.refresh();
  };

  return (
    <form onSubmit={createTodo}>
      <span>Title: </span>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <span>Body: </span>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
