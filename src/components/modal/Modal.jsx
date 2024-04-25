import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { rayons } from "./datalist";
import styles from "./Modal.module.css";
import { useAddUsersMutation } from "../../redux/OrenApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "600px",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  width: {
    "@media (max-width: 2000px)": {
      width: "600px",
    },
    "@media (max-width: 500px)": {
      width: "350px",
    },
  },
  height: {
    "@media (max-width: 700px)": {
      height: "670px",
    },
    "@media (max-width: 500px)": {
      height: "580px",
    },
  },
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [city, setCity] = useState("");
  const [rayon, setRayon] = useState("");
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [post, setPost] = useState("");
  const [postUser] = useAddUsersMutation();
  const [successMessage, setSuccessMessage] = useState("");

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
    {
      id: parseInt("4"),
      name: "Торжественная церемония награждения победителей конкурсов",
    },
    {
      id: parseInt("5"),
      name: "Пленарная сессия «Основные акценты в изменениях трудового законодательства»",
    },
    {
      id: parseInt("6"),
      name: "Сессия «IT-cервисы в решении кадровых задач»",
    },
    { id: parseInt("7"), name: "Дискуссионная сессия «Встреча без галстуков»" },
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
  console.log(answers);

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

  const addNewUsers = () => {
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
      postUser({
        fio,
        email,
        phoneNumber,
        organization,
        post,
        city,
        rayon,
        selectedAnswers,
      })
        .unwrap()
        .then(() => {
          clearInputs();
          setSuccessMessage(
            "Вы успешно зарегистрировались проверьте email на наличие письма с qr-cod!"
          );
        });
    }
  };

  const clearInputs = () => {
    setFio("");
    setEmail("");
    setPhoneNumber("");
    setOrganization("");
    setPost("");
    setCity("");
    setRayon("");
    setSelectedAnswers([]);
  };

  return (
    <div>
      <button className={styles.modalHeadButton} onClick={handleOpen}>
        Регистрация
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className={styles.modalContainer}>
              {successMessage && <p>{successMessage}</p>}
              <div className={style.container}>
                <div className={styles.containerHead}>
                  <h2>Регистрация участников</h2>
                </div>
                <div className={styles.modalItemInput}>
                  <img src="/public/User.svg" alt="" />
                  <input
                    className={styles.modalInput}
                    type="text"
                    placeholder="ФИО"
                    onChange={(e) => setFio(e.target.value)}
                  />
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
                              type="checkbox"
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
                <div className={styles.modalItemInput}>
                  <button className={styles.modalButton} onClick={addNewUsers}>
                    Регистрация
                  </button>
                </div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
