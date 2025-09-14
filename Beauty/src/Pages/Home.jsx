import { useEffect, useState } from "react";
import "./home.css"; // mesmo CSS do seu projeto
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Home() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Buscar nome do usuário
    fetch("http://localhost/seu-projeto/getUser.php", {
      credentials: "include", // mantém sessão PHP
    })
      .then((res) => {
        if (!res.ok) throw new Error("Usuário não autenticado");
        return res.json();
      })
      .then((data) => setNomeUsuario(data.nome))
      .catch(() => setNomeUsuario("Visitante"));
  }, []);

  useEffect(() => {
    // Inicializar mapa Leaflet
    if (!map) {
      const mapa = L.map("map").setView([-23.55, -46.63], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
      }).addTo(mapa);
      setMap(mapa);
    }
  }, [map]);

  function buscarSaloes() {
    // exemplo simples - no seu PHP já tinha buscarSalao.js
    alert("Buscando salões...");
  }

  return (
    <div className="container">
      <h1>Bem-vindo à BeautfulHair</h1>
      <h2>Bem-vindo, {nomeUsuario}</h2>

      <p>
        Na nossa Central de agendamentos e serviços estéticos, dedicamo-nos a
        proporcionar momentos especiais para você e seus cuidados com o corpo.
        Oferecemos produtos de qualidade, serviços personalizados e uma
        experiência única, celebrando a alegria e o carinho que os cabelos
        trazem às nossas vidas.
      </p>

      <h2>Salões e Barbearias Perto de Você</h2>
      <button onClick={buscarSaloes}>Buscar Salões</button>

      <div id="map" style={{ height: "400px", marginTop: "1rem" }}></div>
      <div id="mensagem"></div>
      <ul id="resultados"></ul>

      <footer>
        <p>© 2025 BeautfulHair | Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
