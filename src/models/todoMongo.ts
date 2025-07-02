import { Schema, model, models, Document } from 'mongoose';

// Extend Document to ensure Mongoose adds _id and other fields
/**
 * Represents a Todo item document in MongoDB.
 *
 * @remarks
 * This interface extends the base `Document` type and defines the structure
 * of a Todo item stored in the database.
 *
 * @property title - The title or description of the todo item.
 * @property id - The unique identifier for the todo item.
 * @property is_completed - Indicates whether the todo item is completed.
 * @property createdAt - The date and time when the todo item was created (optional).
 */
export interface TodoDocument extends Document {
  title: string;
  id: string;
  is_completed: boolean;
  createdAt?: Date;
}

const todoSchema = new Schema<TodoDocument>({
  title: { type: String, required: true },
  id: { type: String, required: true },
  is_completed: { type: Boolean, required: true },
  createdAt: { type: Date, default: () => new Date() },
});

export default models.Todo || model<TodoDocument>('Todo', todoSchema);
