interface TODOverviewProps {
  todos_completed: number;
  total_todos: number;
}

/**
 * Displays an overview section showing the number of completed tasks out of the total tasks.
 *
 * @param todos_completed - The number of tasks that have been completed.
 * @param total_todos - The total number of tasks.
 *
 * @remarks
 * Renders a section with motivational text and a progress indicator in the format "completed/total".
 */
function TODOverview({ todos_completed, total_todos }: TODOverviewProps) {
  return (
    <section className="todohero_section">
      <div>
        <p className="text_large">Task Done</p>
        <p className="text_small">Keep it up</p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}

export default TODOverview;
