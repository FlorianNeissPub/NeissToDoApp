"use client";
import React from "react";

import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOverview from "@/components/TODOverview";
import TODOList from "@/components/TODOList";
import { Todo } from "@/types/types";

/**
 * Home component serves as the main entry point for the application.
 * 
 * - Fetches the list of todos from the backend API on mount and manages them in local state.
 * - Calculates the number of completed todos and the total number of todos.
 * - Renders the main layout including the Header, overview of todos, the form to add todos, and the list of todos.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
function Home() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  // Fetch todos from backend handler on mount
  React.useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("/api/handler");
      if (res.ok) {
        const data = await res.json();
        setTodos(data);
      }
    };
    fetchTodos();
  }, []);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <Header />
      <TODOverview todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Home;
