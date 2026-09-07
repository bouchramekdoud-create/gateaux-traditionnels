import { Header } from "../Header";
import "../style.css";

export function AvisClients() {
  return (
    <div>
      <Header />

      <div
        className="BODY avis-body"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(120deg, #fff0f5, #ff8fc7, #e91e63, #ff8fc7, #fff0f5)",
          backgroundSize: "300% 300%",
          animation: "pinkBreathing 3s ease-in-out infinite",
          paddingTop: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="avis-text" style={{ fontFamily: "cursive" }}>
          Aucun avis pour le moment Nous venons tout juste de lancer cette
          section — soyez parmi les premiers à nous faire part de votre
          expérience !
        </p>
      </div>
    </div>
  );
}
