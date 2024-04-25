import "./Footer.css";
import { useState } from "react";
import Modal from "../modal/Modal";
import { Link } from "react-scroll";
export default function Footer({ city, setCity, rayon, setRayon }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <footer>
      <a href="/">
        <img className="footerLogo" src="/public/Logo.svg" alt=""></img>
      </a>
      <div className="navigation">
        <ul>
          <li>
            <Link to="main" smooth={true}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="purpose" smooth={true}>
              Цели форума
            </Link>
          </li>
          <li>
            <Link to="event" smooth={true}>
              Программа мероприятий
            </Link>
          </li>
          <li>
            <Link to="map" smooth={true}>
              Карта мероприятий
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={100}>
              Галерея
            </Link>
          </li>
        </ul>
      </div>
      <div className="contacts">
        <ul>
          <li>
            <a href="mailto:socp@mail.orb.ru">socp@mail.orb.ru</a>
          </li>
          <li>
            <a href="tel:+73532770147">+7 (3532) 770147</a>
            <br />
            <a href="tel:48-51-78">48-51-78</a>
          </li>
          <li className="net">
            <a href="https://t.me/orenmintrud" target="_blank">
              <img src="/public/telegram.svg" alt=""></img>
            </a>
            <a href="https://m.vk.ru/mintruda56?ref=group_qr" target="_blank">
              <img src="/public/vk.svg" alt=""></img>
            </a>
          </li>
          <li>
            <button
              className="regButton"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/registration";
              }}
            >Регистрация</button>
          </li>
        </ul>
      </div>
    </footer>
  );
}
