# Todo Application with React Context

A modern, responsive Todo application built with React, utilizing Context API for state management and TailwindCSS for styling.

## 🚀 Features

- Create new todos
- Edit existing todos
- Mark todos as complete/incomplete
- Delete todos
- Persistent storage using localStorage
- Clean and responsive UI
- Real-time updates

## 🛠️ Technologies Used

- React 19
- Vite
- TailwindCSS
- Context API for state management
- LocalStorage for data persistence

## 🏗️ Project Structure

```
todoContext/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   └── index.js
│   ├── contexts/
│   │   ├── TodoContext.js
│   │   └── index.js
│   ├── App.jsx
│   └── main.jsx
```

## 🚦 Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 💻 Usage

- Add a new todo by typing in the input field and pressing the "+" button
- Edit a todo by clicking the "✏️" button
- Mark a todo as complete by checking the checkbox
- Delete a todo by clicking the "❌" button

## 🔋 State Management

The application uses React's Context API for state management. The main context (`TodoContext`) provides the following functions:

- `addTodo`: Add a new todo
- `updateTodo`: Update an existing todo
- `deleteTodo`: Remove a todo
- `toggleComplete`: Toggle the completion status of a todo

## 🎨 Styling

The application uses TailwindCSS for styling, providing a clean and responsive design that works across different screen sizes.

## 🏃‍♂️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
