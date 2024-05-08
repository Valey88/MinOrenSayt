import React from "react";
import styles from "./Register.module.css";
import { useState } from "react";
import { rayons } from "./data/dateList";
import { useAddUsersMutation } from "../../redux/OrenApi";

const Register = ({ onUserRegistrationChange }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [city, setCity] = useState("");
  const [rayon, setRayon] = useState("");
  const [midleName, setMidleName] = useState("");
  const [seName, setSeName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [post, setPost] = useState("");
  const [postUser] = useAddUsersMutation();
  const [error, setError] = useState("");

  const answers = [
    {
      category: "category1",
      options: [
        {
          id: 1,
          name: "Пленарная сессия «Вектор развития кадровой политики: новые инструменты и возможности»",
        },
        {
          id: 2,
          name: "Сессия «Цифровое будущее охраны труда»",
        },
        {
          id: 3,
          name: "Тренинг «Иван Васильевич не меняет профессию»",
        },
      ],
    },
    {
      category: "category2",
      options: [
        {
          id: 4,
          name: "Торжественная церемония награждения победителей конкурсов",
        },
      ],
    },
    {
      category: "category3",
      options: [
        {
          id: 5,
          name: "Пленарная сессия «Основные акценты в изменениях трудового законодательства»",
        },
        {
          id: 6,
          name: "Сессия «IT-cервисы в решении кадровых задач»",
        },
        {
          id: 7,
          name: "Дискуссионная сессия «Встреча без галстуков»",
        },
      ],
    },
    {
      category: "category4",
      options: [
        {
          id: 8,
          name: "Концертная программа «Открытие третьего трудового семестра»",
        },
        {
          id: 9,
          name: "Дискуссионная сессия «Охрана труда в бюджетных организациях»",
        },
        {
          id: 10,
          name: "Сессия «Особенности расследования несчастных случаев на производстве»",
        },
      ],
    },
  ];

  console.log(answers[0].options);

  const handleSubmit = () => {
    let isValid = true;
    if (seName.trim() === "") {
      setError("Это поле обязательно для заполнения");
      isValid = false;
    } else {
      // Здесь вы можете выполнить другие действия при отправке формы
      setError("");
      // ...
    }
    if (name.trim() === "") {
      setError("Это поле обязательно для заполнения");
      isValid = false;
    } else {
      // Здесь вы можете выполнить другие действия при отправке формы
      setError("");
      // ...
    }
    if (midleName.trim() === "") {
      setError("Это поле обязательно для заполнения");
      isValid = false;
    } else {
      // Здесь вы можете выполнить другие действия при отправке формы
      setError("");
      // ...
    }
    if (phoneNumber.trim() === "") {
      setError("Это поле обязательно для заполнения");
      isValid = false;
    } else {
      // Здесь вы можете выполнить другие действия при отправке формы
      setError("");
      // ...
    }
    if (organization.trim() === "") {
      setError("Это поле обязательно для заполнения");
      isValid = false;
    } else {
      // Здесь вы можете выполнить другие действия при отправке формы
      setError("");
      // ...
    }
    if (post.trim() === "") {
      setError("Это поле обязательно для заполнения");
      isValid = false;
    } else {
      // Здесь вы можете выполнить другие действия при отправке формы
      setError("");
      // ...
    }
    if (isValid) {
      // Если все проверки прошли успешно, isValid остается true
      return true;
    } else {
      return false;
    }
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Не коректный Email");
    } else {
      setEmailError("");
    }
  };

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      const selectedCategory = answers.find((a) =>
        a.options.some((opt) => opt.id === answer.id)
      ).category;

      const selectedInSameCategory = prevSelectedAnswers.some((id) => {
        const category = answers.find((a) =>
          a.options.some((opt) => opt.id === id)
        ).category;
        return category === selectedCategory;
      });

      if (selectedInSameCategory) {
        alert("Можно выбрать только один ответ в каждой категории");
        return prevSelectedAnswers;
      }

      if (prevSelectedAnswers.includes(answer.id)) {
        return prevSelectedAnswers.filter(
          (selectedId) => selectedId !== answer.id
        );
      } else {
        if (prevSelectedAnswers.length < 4) {
          return [...prevSelectedAnswers, answer.id];
        } else {
          alert("Можно выбрать только один ответ в каждой категории");
          return prevSelectedAnswers;
        }
      }
    });
  };

  const addNewUsers = async () => {
    console.log({
      name,
      seName,
      midleName,
      email,
      phoneNumber,
      organization,
      post,
      city,
      rayon,
      selectedAnswers,
    });
    if (
      seName &&
      name &&
      midleName &&
      email &&
      phoneNumber &&
      organization &&
      post &&
      city &&
      rayon &&
      selectedAnswers
    ) {
      await postUser({
        seName,
        name,
        midleName,
        email,
        phoneNumber,
        organization,
        post,
        city,
        rayon,
        selectedAnswers,
      }).unwrap();
      setName("");
      setSeName("");
      setMidleName("");
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
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div className={styles.modalItemInput}>
          <img src="/public/User.svg" alt="" />
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Фамилия"
            onChange={(e) => setSeName(e.target.value)}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div className={styles.modalItemInput}>
          <img src="/public/User.svg" alt="" />

          <input
            className={styles.modalInput}
            type="text"
            placeholder="Имя"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <div className={styles.modalItemInput}>
          <img src="/public/User.svg" alt="" />

          <input
            className={styles.modalInput}
            type="text"
            placeholder="Отчество"
            onChange={(e) => setMidleName(e.target.value)}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div className={styles.modalItemInput}>
          <img src="/public/Mail.svg" alt="" />

          <input
            className={styles.modalInput}
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div className={styles.modalItemInput}>
          <img src="/public/Phone.svg" alt="" />
          <input
            className={styles.modalInput}
            defaultValue="+7"
            type="text"
            placeholder="Номер телефона"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}

        <div className={styles.modalItemInput}>
          <img src="/public/Group.svg" alt="" />
          <input
            className={styles.modalInput}
            placeholder="Организация"
            type="text"
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
          <img src="/public/Place.svg" alt="" />
          <select
            onChange={(e) => setRayon(e.target.value)}
            className={styles.cityList}
          >
            <option value="">Местоположение</option>
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
              <h2 className={styles.timeHead}>Время проведения: 10.30-12.00</h2>
              {answers[0].options.map((answer) => {
                return (
                  <div>
                    <li key={answer.id}>
                      <h2>{answer.time}</h2>
                      <label style={{ color: "red" }}>
                        <input
                          type="checkbox"
                          value={answer.id}
                          onChange={() => handleSelectAnswer(answer)}
                          checked={selectedAnswers.includes(answer.id)}
                        />
                        {answer.name}
                      </label>
                    </li>
                  </div>
                );
              })}
              <h2 className={styles.timeHead}>Время проведения: 12.00-13.00</h2>
              {answers[1].options.map((answer) => {
                return (
                  <div>
                    <li key={answer.id}>
                      <h2>{answer.time}</h2>
                      <label style={{ color: "#fdcc62" }}>
                        <input
                          type="checkbox"
                          value={answer.id}
                          onChange={() => handleSelectAnswer(answer)}
                          checked={selectedAnswers.includes(answer.id)}
                        />
                        {answer.name}
                      </label>
                    </li>
                  </div>
                );
              })}
              <h2 className={styles.timeHead}>Время проведения: 13.00-15.00</h2>
              {answers[2].options.map((answer) => {
                return (
                  <div>
                    <li key={answer.id}>
                      <h2>{answer.time}</h2>
                      <label style={{ color: "blue" }}>
                        <input
                          type="checkbox"
                          value={answer.id}
                          onChange={() => handleSelectAnswer(answer)}
                          checked={selectedAnswers.includes(answer.id)}
                        />
                        {answer.name}
                      </label>
                    </li>
                  </div>
                );
              })}
              <h2 className={styles.timeHead}>Время проведения: 15.00-17.00</h2>
              {answers[3].options.map((answer) => {
                return (
                  <div>
                    <li key={answer.id}>
                      <h2>{answer.time}</h2>
                      <label style={{ color: "rgb(33, 234, 33)" }}>
                        <input
                          type="checkbox"
                          value={answer.id}
                          onChange={() => handleSelectAnswer(answer)}
                          checked={selectedAnswers.includes(answer.id)}
                        />
                        {answer.name}
                      </label>
                    </li>
                  </div>
                );
              })}
            </ul>
          </details>
        </div>
        <button
          className={styles.modalButton}
          onClick={(e) => {
            if (handleSubmit()) {
              addNewUsers();
              handleButtonClick();
              e.preventDefault();
              // window.location.href = "/";
            }
          }}
        >
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default Register;
