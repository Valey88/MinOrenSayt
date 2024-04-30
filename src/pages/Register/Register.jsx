import React from "react";
import styles from "./Register.module.css";
import { useState } from "react";
import { rayons } from "./data/dateList";
import { useAddUsersMutation } from "../../redux/OrenApi";

const Register = ({ onUserRegistrationChange }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [city, setCity] = useState("");
  const [rayon, setRayon] = useState("");
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [post, setPost] = useState("");
  const [postUser] = useAddUsersMutation();

  const answers = [
    [
      {
        id: parseInt("1"),
        type: 1,
        name: "Пленарная сессия «Вектор развития кадровой политики: новые инструменты и возможности» - 10.30-12.00",
      },
      {
        id: parseInt("2"),
        type: 1,
        name: "Сессия «Цифровое будущее охраны труда» - 10.30-12.00",
      },
      {
        id: parseInt("3"),
        type: 1,
        name: "Тренинг «Иван Васильевич не меняет профессию» - 10.30-12.00",
      },
      {
        id: parseInt("4"),
        type: 1,
        name: "Торжественная церемония награждения победителей конкурсов - 12.00-13.00",
      },
    ],
    [
      {
        id: parseInt("5"),
        type: 2,
        name: "Пленарная сессия «Основные акценты в изменениях трудового законодательства» - 13.00-15.00",
      },
      {
        id: parseInt("6"),
        type: 2,
        name: "Сессия «IT-cервисы в решении кадровых задач» - 13.00-15.00",
      },
      {
        id: parseInt("7"),
        type: 2,
        name: "Дискуссионная сессия «Встреча без галстуков» - 13.00-15.00",
      },
    ],
    [
      {
        id: parseInt("8"),
        type: 3,
        name: "Концертная программа «Открытие третьего трудового семестра» - 15.00-17.00",
      },
      {
        id: parseInt("9"),
        type: 3,
        name: "Дискуссионная сессия «Охрана труда в бюджетных организациях» - 15.00-17.00",
      },
      {
        id: parseInt("10"),
        type: 3,
        name: "Сессия «Особенности расследования несчастных случаев на производстве» - 15.00-17.00",
      },
    ],
  ];
  // const answers1 = [

  // ];
  // const answers2 = [

  // ];
  // const answers3 = [

  // ];

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      if (prevSelectedAnswers.includes(answer.id)) {
        return prevSelectedAnswers.filter(
          (selectedId) => selectedId !== answer.id
        );
      } else {
        return [...prevSelectedAnswers, answer.id];
      }
    });
  };

  const addNewUsers = async () => {
    console.log({
      fio,
      email,
      phoneNumber,
      organization,
      post,
      city,
      rayon,
      selectedAnswers,
    });
    if (
      fio &&
      email &&
      phoneNumber &&
      organization &&
      post &&
      city &&
      rayon &&
      selectedAnswers
    ) {
      await postUser({
        fio,
        email,
        phoneNumber,
        organization,
        post,
        city,
        rayon,
        selectedAnswers,
      }).unwrap();
      setFio("");
      setEmail("");
      setPhoneNumber("");
      setOrganization("");
      setPost("");
      setCity("");
      setRayon("");
      setSelectedAnswers([]);
    }
  };
  const handleButtonClick = () => {
    onUserRegistrationChange(true);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.container}>
        <div className={styles.containerHead}>
          <h2>Регистрация участников</h2>
        </div>
        {/* Сделать поля */}
        <div className={styles.modalItemInput}>
          <img src="/public/User.svg" alt="" />
          <div className={styles.column}>
            <input
              className={styles.modalInput}
              type="text"
              placeholder="Фамилия"
              onChange={(e) => setFio(e.target.value)}
            />
            <input
              className={styles.modalInput}
              type="text"
              placeholder="Имя"
              onChange={(e) => setFio(e.target.value)}
            />
            <input
              className={styles.modalInput}
              type="text"
              placeholder="Отчество (Если есть)"
              onChange={(e) => setFio(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.modalItemInput}>
          <img src="/public/Mail.svg" alt="" />
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.modalItemInput}>
          <img src="/public/Phone.svg" alt="" />
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Номер телефона"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.modalItemInput}>
          <img src="/public/Group.svg" alt="" />
          <input
            className={styles.modalInput}
            placeholder="Организация"
            type="text"
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
        <div className={styles.modalItemInput}>
          <img src="/public/Stuff.svg" alt="" />
          <input
            className={styles.modalInput}
            placeholder="Должность"
            type="text"
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <div className={styles.modalItemInput}>
          <select
            onChange={(e) => setCity(e.target.value)}
            className={styles.cityList}
          >
            <option value="">Выберите город</option>
            <option value="г. Оренбург">г. Оренбург</option>
            <option value="г. Бугуруслан">г. Бугуруслан</option>
            <option value="г. Медногорск">г. Медногорск</option>
            <option value="г. Новотроицк">г. Новотроицк</option>
            <option value="г. Орск">г. Орск</option>
          </select>
          <select
            onChange={(e) => setRayon(e.target.value)}
            className={styles.cityList}
          >
            <option value="">Выберите район</option>
            {rayons.map((rayon) => (
              <option value={rayon.name1}>{rayon.name2}</option>
            ))}
          </select>
        </div>
        <div className={styles.dropidropi}>
          <details className={styles.dropdown}>
            <summary role="button">
              <a className={styles.button}>
                Выберите события <img src="public\down.svg" alt="" />
              </a>
            </summary>
            <ul>
              {answers.map((answer) =>
                answer.map((item) => {
                  return (
                    <div>
                      <li key={item.id}>
                        <label>
                          <input
                            type="radio"
                            name={"radAnswer_" + item.type}
                            value={item.id}
                            onChange={() => handleSelectAnswer(item)}
                            checked={selectedAnswers.includes(item.id)}
                          />
                          {item.name}
                        </label>
                      </li>
                    </div>
                  );
                })
              )}
            </ul>
          </details>
        </div>
        <button
          className={styles.modalButton}
          onClick={(e) => {
            addNewUsers();
            handleButtonClick();
            e.preventDefault();
            // window.location.href = "/";
          }}
        >
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default Register;
