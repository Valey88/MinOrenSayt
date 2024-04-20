import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Modal from "../modal/Modal";

export default function Header({ city, setCity, rayon, setRayon }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="headerLogo">
          <Link to="/">
            <img src="/public/Logo.svg" alt="" />
          </Link>
        </div>
        <nav
          className={`headerNav ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(false)}
        >
          <ul className="headerNavList">
            <li className="headerNavItem">
              <Link to="/">Цели форума </Link>
            </li>
            <li className="headerNavItem">
              <Link to="/contacts">Программа мероприятий</Link>
            </li>
            <li className="headerNavItem">
              <Link to="/Booking">Карта мероприятий </Link>
            </li>
            <li className="headerNavItem">
              <Link to="https://t.me/coworking_orgmu">Галерея</Link>
            </li>
          </ul>
        </nav>
        <div>
          {/* <Modal city={city} setCity={setCity} rayon={rayon} setRayon={setRayon}/> */}
        </div>
        <div className="headerMenu">
          <button onClick={() => setOpen(!isOpen)}>
            <img src="/public/Hamburger.svg" width={40} height={40} alt="" />
          </button>
        </div>
      </header>
    </>
  );
}
