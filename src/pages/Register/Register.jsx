import React from "react";
import styles from "./Register.module.css";
import { useState } from "react";
import { rayons } from "./data/dateList";
// import { answers } from "./data/aswersList";
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
    {
      id: parseInt("1"),
      name: "Пленарная сессия «Вектор развития кадровой политики: новые инструменты и возможности»",
    },
    { id: parseInt("2"), name: "Сессия «Цифровое будущее охраны труда»" },
    {
      id: parseInt("3"),
      name: "Тренинг «Иван Васильевич не меняет профессию»",
    },
  ];
  const answers1 = [
    {
      id: parseInt("4"),
      name: "Торжественная церемония награждения победителей конкурсов",
    },
  ];
  const answers2 = [
    {
      id: parseInt("5"),
      name: "Пленарная сессия «Основные акценты в изменениях трудового законодательства»",
    },
    {
      id: parseInt("6"),
      name: "Сессия «IT-cервисы в решении кадровых задач»",
    },
    { id: parseInt("7"), name: "Дискуссионная сессия «Встреча без галстуков»" },
  ];
  const answers3 = [
    {
      id: parseInt("8"),
      name: "Концертная программа «Открытие третьего трудового семестра»",
    },
    {
      id: parseInt("9"),
      name: "Дискуссионная сессия «Охрана труда в бюджетных организациях»",
    },
    {
      id: parseInt("10"),
      name: "Сессия «Особенности расследования несчастных случаев на производстве»",
    },
  ];

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
              {answers.map((answer) => (
                <li key={answer.id}>
                  <label>
                    <input
                      type="radio"
                      onChange={() => handleSelectAnswer(answer)}
                      checked={selectedAnswers.includes(answer.id)}
                    />
                    {answer.name}
                  </label>
                </li>
              ))}
            </ul>
          </details>
          {/* <h2>Доступные варианты ответов:</h2>
            <ul>
              {answers.map((answer) => (
                <li key={answer.id}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => handleSelectAnswer(answer)}
                      checked={selectedAnswers.includes(answer.id)}
                    />
                    {answer.name}
                  </label>
                </li>
              ))}
            </ul> */}
        </div>
        <button
          className={styles.modalButton}
          onClick={(e) => {
            addNewUsers();
            handleButtonClick();
            e.preventDefault();
            window.location.href = "/";
          }}
        >
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default Register;
