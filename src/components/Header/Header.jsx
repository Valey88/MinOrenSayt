import { useLocation } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Modal from "../modal/Modal";
import { Link } from "react-scroll";

export default function Header({ city, setCity, rayon, setRayon }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="header" id="main">
        <div className="headerLogo">
          <a href="/">
            <img src="/public/Logo.svg" alt="" />
          </a>
        </div>
        <nav
          className={`headerNav ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(false)}
        >
          <ul className="headerNavList">
            <li className="headerNavItem">
              <Link to="purpose" smooth={true}>
                Цели форума
              </Link>
            </li>
            <li className="headerNavItem">
              <Link to="event" smooth={true}>
                Программа мероприятий
              </Link>
            </li>
            <li className="headerNavItem">
              <Link to="map" smooth={true}>
                Карта мероприятий{" "}
              </Link>
            </li>
            <li className="headerNavItem">
              <Link to="gallery" smooth={true}>
                Галерея
              </Link>
            </li>
            <li className="headerNavBtn">
              <Modal
                city={city}
                setCity={setCity}
                rayon={rayon}
                setRayon={setRayon}
              />
            </li>
          </ul>
        </nav>
        <div className="regBtn">
          <Modal />
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
