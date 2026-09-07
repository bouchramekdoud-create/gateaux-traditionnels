import { Form } from "./Form";
import { Header } from "../Header";
import "../style.css";

export function Contact() {
  return (
    <div className="ContactBackground">
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "10",
        }}
      >
        <Header />
      </div>

      <div className="contact-form-container">
        <Form />
      </div>
    </div>
  );
}
