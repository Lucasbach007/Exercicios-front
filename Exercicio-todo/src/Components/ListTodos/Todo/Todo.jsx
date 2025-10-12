import { useState } from "react";
import "./Todo.css";

export default function Todo({ todo, index, toggleDone, removeTodo }) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="todo-item">
      <p>
        {index + 1}º - <b>{todo.title}</b> {todo.done ? "✅" : "🕒"}
      </p>
      <button onClick={() => removeTodo(todo.id)}>❌</button>
      <button onClick={() => toggleDone(todo.id)}>✔️</button>
      <button onClick={() => setShowDesc(!showDesc)}>▶</button>

      {showDesc && <p className="descricao">{todo.text}</p>}
    </div>
  );
}
