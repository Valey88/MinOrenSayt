import { useState, useCallback } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/modal/Modal";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";

function App() {
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const handleUserRegistrationChange = useCallback((newValue) => {
    setIsUserRegistered(newValue);
  }, []);
  {
    isUserRegistered &&
      alert(
        "Пользователь успешно зарегистрирован, мы отправим вам письмо на email с информацией о мероприятии"
      );
  }
  // console.log(isUserRegistered);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/registration"
          element={
            <Register onUserRegistrationChange={handleUserRegistrationChange} />
          }
        />
        {/* <Route path="/Booking" element={<Booking />} />
        <Route path="/CreateRooms" element={<CreateRooms />} />
        <Route path="/DeleteImage" element={<DeleteImage />} />  */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
