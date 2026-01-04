import { Link } from "react-router-dom";
//import "./Navbar.css"; // opcional

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MinhaApp</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
