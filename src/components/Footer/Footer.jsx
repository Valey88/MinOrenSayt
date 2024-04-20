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
            <a href="socp@mail.orb.ru">socp@mail.orb.ru</a>
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
            <button>Регистрация</button>
          </li>
        </ul>
      </div>
    </footer>
  );
}
