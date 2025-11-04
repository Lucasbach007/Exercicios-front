import { useState } from "react";
import "./TodoFields.css";

export default function TodoFields({ addTodo }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title, text);
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label>Título</label>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Texto</label>
      <textarea
        placeholder="Texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">+ Nova Tarefa</button>
    </form>
  );
}
