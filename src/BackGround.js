import backGround from "./BackGround.jpg";
import { Link } from "react-router-dom";

export function BackGround() {
  return (
    <div
      className="background-section"
      style={{
        padding: "60px",
        height: "72vh",
        width: "100%",
        position: "relative",
        zIndex: 1,
        backgroundImage: `url(${backGround})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottom: "2px solid rgb(203, 121, 153)",
        boxShadow: "0 5px 10px rgb(203, 121, 153)",
      }}
    >
      <div></div>

      <div className="background-title" style={{ lineHeight: 0.4 }}>
        <p
          style={{
            direction: "rtl",
            fontSize: "30px",
            marginRight: "70%",
            fontFamily: "cursive",
          }}
        >
          <br></br> Le gout du bonheur
        </p>

        <p
          style={{
            fontSize: "30px",
            marginRight: "65%",
            color: "rgb(203, 121, 153)",
            fontFamily: "cursive",
          }}
        >
          dans chaque bouchée
        </p>
      </div>

      <p
        className="background-description"
        style={{
          marginRight: "65%",
          lineHeight: "1.7",
        }}
      >
        Des douceur artisanales préparées avec amour <br />
        et des ingrédients de qualité
      </p>

      <div className="background-buttons">
        <button
          id="firstBtn"
          className="btn"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "20px",
            width: "200px",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/products"
          >
            Découvrir nos créations ➡️
          </Link>
        </button>

        <button
          id="secondBtn"
          className="btn"
          style={{
            marginRight: "40%",
            padding: "10px",
            border: "none",
            borderRadius: "20px",
            width: "200px",
            border: "1.5px solid rgb(203, 121, 153)",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/Contact"
          >
            Commander maintenant ➡️
          </Link>
        </button>
      </div>

      <div className="background-features">
        <div className="background-feature">
          <div
            className="div"
            style={{
              border: "2px solid rgb(243, 222, 230)",
              borderRadius: "10px",
              padding: "5px",
              boxShadow: "0px 7px 5px rgb(203, 121, 153)",
            }}
          >
            <img
              className="downPhoto"
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/3719/3719006.png"
            />
          </div>

          <p style={{ fontSize: "11px", fontFamily: "cursive" }}>
            High Quality
          </p>
        </div>

        <div className="background-feature">
          <div
            className="div"
            style={{
              border: "2px solid rgb(243, 222, 230)",
              borderRadius: "10px",
              padding: "5px",
              boxShadow: "0px 7px 5px rgb(203, 121, 153)",
            }}
          >
            <img
              className="downPhoto"
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/2203/2203145.png"
            />
          </div>

          <p style={{ fontSize: "11px", fontFamily: "cursive" }}>
            Livraison Rapide
          </p>
        </div>

        <div className="background-feature">
          <div
            className="div"
            style={{
              border: "2px solid rgb(243, 222, 230)",
              borderRadius: "10px",
              padding: "5px",
              boxShadow: "0px 7px 5px rgb(203, 121, 153)",
            }}
          >
            <img
              className="downPhoto"
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/9548/9548133.png"
            />
          </div>

          <p style={{ fontSize: "11px", fontFamily: "cursive" }}>
            Fait maison
            <br></br> avec amour
          </p>
        </div>
      </div>
    </div>
  );
}
