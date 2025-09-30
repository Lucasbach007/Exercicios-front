import Todo from "./Todo/Todo";
import "./ListTodos.css";

export default function ListTodos({ todos, toggleDone, removeTodo }) {
  if (todos.length === 0) {
    return <p>Sem tarefas no momento.</p>;
  }

  return (
    <div className="list-todos">
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          index={index}
          todo={todo}
          toggleDone={toggleDone}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
