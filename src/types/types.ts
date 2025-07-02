/**
 * Represents a to-do item.
 *
 * @property title - The title or description of the to-do item.
 * @property id - A unique identifier for the to-do item.
 * @property is_completed - Indicates whether the to-do item has been completed.
 * @property createdAt - (Optional) The date and time when the to-do item was created.
 */
export type Todo = {
  title: string;
  id: string;
  is_completed: boolean;
  createdAt?: Date;
};

