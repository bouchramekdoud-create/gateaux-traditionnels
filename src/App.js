import "./App.css";
import { Header } from "./Header";
import { BackGround } from "./BackGround.js";
import { Categories } from "./Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products.js";
import { Commande } from "./pages/Commande.js";
import { useState } from "react";
import { Contact } from "./pages/Contact.js";
import { AvisClients } from "./pages/AvisClient.js";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <BackGround />
              <Categories />
            </div>
          }
        />

        <Route path="/Products" element={<Products setCart={setCart} />} />
        <Route path="/Commande" element={<Commande cart={cart} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AvisClients" element={<AvisClients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
