import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/modal/Modal";
import Footer from "./components/Footer/Footer";

function App() {
  const [city, setCity] = useState("");
  const [rayon, setRayon] = useState("");

  return (
    <>
      <Header city={city} setCity={setCity} rayon={rayon} setRayon={setRayon} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Admin" element={<Admin />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/CreateRooms" element={<CreateRooms />} />
        <Route path="/DeleteImage" element={<DeleteImage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
