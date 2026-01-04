import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // validação simples
    if (!form.nome || !form.email || !form.senha) {
      alert("Preencha todos os campos!");
      return;
    }

    // Aqui poderia chamar a API

    // 👉 REDIRECIONA PARA HOME
    navigate("/login");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input name="senha" onChange={handleChange} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
