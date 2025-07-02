import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
import Todo from '../../models/todoMongo';

/**
 * API route handler for managing Todo items.
 *
 * Handles the following HTTP methods:
 * - GET: Retrieves all Todo items, sorted by creation date (descending).
 * - POST: Creates a new Todo item with the provided title, id, and is_completed status.
 * - DELETE: Deletes a Todo item by its id (provided in the query).
 * - PUT: Updates a Todo item by its id (provided in the query) with the provided data.
 *
 * Responds with appropriate HTTP status codes and JSON data.
 * Returns 405 Method Not Allowed for unsupported HTTP methods.
 *
 * @param req - The Next.js API request object.
 * @param res - The Next.js API response object.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    console.log('Received GET request');
    const items = await Todo.find().sort({ createdAt: -1 });
    return res.status(200).json(items);
  }

  if (req.method === 'POST') {
    console.log('Received POST request with body:', req.body);
    const newItem = await Todo.create({
      title: req.body.title, id: req.body.id, is_completed: req.body.is_completed
    });
    return res.status(201).json(newItem);
  }

  if (req.method === 'DELETE') {
    console.log('Received DELETE request with query:', req.query);
    const { id } = req.query;
    await Todo.findByIdAndDelete(id as string);
    return res.status(204).end();
  }

  if (req.method === 'PUT') {
    console.log('Received PUT request with query:', req.query, 'and body:', req.body);
    const { id } = req.query;
    const updateData = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id as string, updateData, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    return res.status(200).json(updatedTodo);
  }

  res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PUT']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
