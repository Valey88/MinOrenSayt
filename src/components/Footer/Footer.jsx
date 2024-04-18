import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <a href="">
        <img className="footerLogo" src="/public/Logo.svg" alt=""></img>
      </a>
      <div className="navigation">
        <ul>
          <li>
            <a href="">Главная</a>
          </li>
          <li>
            <a href="">Цели форума</a>
          </li>
          <li>
            <a href="">Программа мероприятий</a>
          </li>
          <li>
            <a href="">Карта мероприятий</a>
          </li>
          <li>
            <a href="">Галерея</a>
          </li>
        </ul>
      </div>
      <div className="contacts">
        <ul>
          <li>
            <a href="mailto:forumtrudaoren@mail.ru">forumtrudaoren@mail.ru</a>
          </li>
          <li>
            <a href="tel:++7 9242 242 242">+7 9242 242 242</a>
          </li>
          <li className="net">
            <a href="">
              <img src="/public/telegram.svg" alt=""></img>
            </a>
            <a href="">
              <img src="/public/vk.svg" alt=""></img>
            </a>
          </li>
          <li>
            <button>Регистрация</button>
          </li>
        </ul>
      </div>
    </footer>
  );
}
