import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/modal/Modal";

function App() {
  const [city, setCity] = useState("");
  console.log(city);
  return (
    <>
      <Header city={city} setCity={setCity} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Admin" element={<Admin />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/CreateRooms" element={<CreateRooms />} />
        <Route path="/DeleteImage" element={<DeleteImage />} /> */}
      </Routes>
    </>
  );
}

export default App;
