import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../src/services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      // exemplo: token vindo do backend
      localStorage.setItem("token", data.token);
      alert("Login realizado com sucesso!");
    },
    onError: (error) => {
      alert("Email ou senha inválidos");
      console.error(error);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Entrando..." : "Entrar"}
      </button>

      {mutation.isError && (
        <p style={{ color: "red" }}>Erro ao fazer login</p>
      )}
    </form>
  );
}

export default Login;
