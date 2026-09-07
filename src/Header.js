import "./style.css";
import logo from "./newlogo.jpg";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <nav>
      <div>
        <img className="logo" alt="logo" src={logo} />
      </div>
      <div className="middel">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <p
            style={{
              fontSize: "12px",
            }}
          >
            Accueil
          </p>
        </Link>
        {/* <a>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            Boutique
          </p>
        </a> */}
        {/* <Link
          to="/Apropos"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p
            style={{
              fontSize: "12px",
            }}
          >
            A propos
          </p>
        </Link> */}
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/Products"
        >
          <p
            style={{
              fontSize: "12px",
            }}
          >
            Nos Creations
          </p>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/AvisClients"
        >
          <p
            style={{
              fontSize: "12px",
            }}
          >
            Avis clients
          </p>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/Contact"
        >
          <p
            style={{
              fontSize: "12px",
            }}
          >
            Contact
          </p>
        </Link>
      </div>
      {/* <div className="ryt">
        <img
          className="photo"
          alt="reaserch"
          src="https://cdn-icons-png.flaticon.com/128/49/49116.png"
        />
        <img
          className="photo"
          alt="contact"
          src="https://cdn-icons-png.flaticon.com/128/8143/8143259.png"
        />
        <Link to="../Commande">
          <img
            className="photo"
            alt="pack"
            src="https://cdn-icons-png.flaticon.com/128/10320/10320560.png"
          />
        </Link>
      </div> */}
      <div className="ryt "></div>
    </nav>
  );
}
