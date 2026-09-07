import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../style.css";

export function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_y1lapzd", "template_hikwa53", form, "8QkBKf9Ex5rXAQPfa")
      .then(() => {
        alert("Votre message a été envoyé !");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Une erreur est survenue.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      style={{
        height: "450px",
        width: "60%",
        border: "2px solid rgb(210, 143, 169)",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "60px",
        boxShadow: "10px 10px 10px rgb(146, 102, 119)",
      }}
    >
      <div className="label">
        <label style={{ fontFamily: "emoji" }}>Nom:</label>
        <input
          className="inp"
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="label">
        <label style={{ fontFamily: "emoji" }}>Email:</label>
        <input
          className="inp"
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="label">
        <label style={{ fontFamily: "emoji" }}>Phone:</label>
        <input
          className="inp"
          type="tel"
          name="phone"
          placeholder="Votre telephone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="label">
        <label style={{ fontFamily: "emoji" }}>Message:</label>
        <textarea
          className="inp"
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        className="inp"
        style={{
          borderRadius: "20px",
          backgroundColor: "rgb(210, 143, 169)",
          fontFamily: "emoji",
        }}
        type="submit"
      >
        Envoyer
      </button>
    </form>
  );
}
