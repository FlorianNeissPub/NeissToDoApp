# NeissToDoApp

NeissToDoApp is a simple and modern full-stack To-Do application built with Next.js, React, TypeScript, and MongoDB. It demonstrates a clean separation between frontend and backend, using RESTful API routes for data management and Mongoose for MongoDB integration.

## 🏗️ Architecture

- **Frontend:**  
  Built with React and TypeScript using the Next.js App Router. Components are organized in the `src/components` directory.
- **Backend:**  
  API routes are defined in `src/pages/api/`, handling CRUD operations for todos. Mongoose models are used for MongoDB data access.
- **Database:**  
  MongoDB is used as the persistent data store, with Mongoose schemas for type safety and validation.
- **State Management:**  
  React hooks (`useState`, `useEffect`) manage UI state and synchronize with the backend via API calls.

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## 🚀 Installation & Usage

1. **Install MongoDB**  
   Download and install MongoDB Community Edition:  
   [MongoDB Download](https://www.mongodb.com/try/download/community)

2. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/NeissToDoApp.git
   cd NeissToDoApp
   ```

3. **Install dependencies**  
   Install the required npm packages:  
   ```sh
   npm install
   ```

4. **Set up environment variables**  
   Copy the example environment file and add your MongoDB connection string:  
   ```sh
   cp .env.local.example .env.local
   ```
   Update the `DATABASE_URL` in `.env.local` with your MongoDB connection string.

5. **Run the development server**  
   Start the Next.js development server:  
   ```sh
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` to see the app in action.

## 📂 Project Structure

```
NeissToDoApp
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/              # Next.js pages and API routes
│   ├── styles/              # Global styles and CSS modules
│   └── utils/              # Utility functions and types
├── .env.local.example       # Example environment variable file
├── .gitignore               # Git ignore file
├── package.json             # npm package configuration
└── README.md               # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request

Please ensure your code follows the project's coding standards and includes relevant tests.

## 📄 License

This project is not licenced

---

Made with ❤️ by [Florian Neiss](https://github.com/FlorianNeissPub/NeissToDoApp)


