 import "./style.css";
import Aid from "./3id.jpg";
import sableChoco from "./sableChoco.jpg";
import sable from "./choco.jpg";
import white from "./white.jpg";
import { Link } from "react-router-dom";

export function Categories() {
  return (
    <div className="categories'container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        backgroundColor: "rgb(255, 247, 238)",
        padding: "30px",
        margin: "0",
      }}
    >
      <PetitDiv text="Sablé " image={sableChoco} />
      <PetitDiv text="Sablé " image={Aid} />
      <PetitDiv text="Fourré " image={sable} />
      <PetitDiv text=" Kaàk " image={white} />
    </div>
  );
}

export default function PetitDiv({ image, text }) {
  return (
    <div
      className="category-card"
      style={{
        width: "200px",
        height: "100px",
        border: "1px solid rgb(244, 183, 182)",
        borderRadius: "10px",
        backgroundColor: "rgb(241, 218, 217)",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "90px",
        }}
      >
        <img
          alt=""
          src={image}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "100%",
          }}
        />
      </div>

      <div
        style={{
          width: "70px",
          height: "70px",
          lineHeight: "0.5",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            fontFamily: "emoji",
          }}
        >
          {text}
        </p>

        <Link   to="/Products"  className="voirPlus"
          style={{
            fontSize: "10px",
            fontFamily: "emoji",
            color: "rgb(125, 83, 82)",
            textDecoration: "none",
          }}
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
}