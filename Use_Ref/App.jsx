import { useState } from "react";
import "./App.css";
import TodoFields from "./Components/ListTodos/TodoFields/TodoFields";
import ListTodos from "./Components/ListTodos/ListTodos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, text) => {
    const newTodo = {
      id: Date.now(),
      title,
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Lista de tarefas do React</h1>
      <p>Crie e organize suas tarefas!!!</p>
      <TodoFields addTodo={addTodo} />
      <h2>Lista de Tarefas:</h2>
      <ListTodos todos={todos} toggleDone={toggleDone} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
