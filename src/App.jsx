import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/modal/Modal";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Register />} />
        {/* <Route path="/Booking" element={<Booking />} />
        <Route path="/CreateRooms" element={<CreateRooms />} />
        <Route path="/DeleteImage" element={<DeleteImage />} />  */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
