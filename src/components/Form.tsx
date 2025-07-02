import { Todo } from "@/types/types";

type FormProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

/**
 * Form component for adding new todos.
 *
 * Renders a controlled form with an input field and a submit button.
 * On submission, sends the new todo to the backend API (`/api/handler`)
 * via a POST request, and updates the todo list state with the response.
 *
 * @param setTodos - State setter function to update the list of todos.
 *
 * @example
 * <Form setTodos={setTodos} />
 */
function Form({ setTodos }: FormProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const value = (form.elements.namedItem("todo") as HTMLInputElement).value;
    if (!value.trim()) return;

    // Send new todo to backend handler
    const res = await fetch('/api/handler', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: value, id: self.crypto.randomUUID(), is_completed: false }),
    });
    if (!res.ok) return;
    const newTodo = await res.json();

    // Update todo state with response from backend
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Schreiben Sie den Nächsten Punkt auf Ihre To-Do-Liste"
        />
      </label>

      <button>
        <span className="visually-hidden">Submit</span>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
        >
          <path
            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </form>
  );
}

export default Form;
