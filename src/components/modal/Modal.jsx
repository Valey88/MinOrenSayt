import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { rayons } from "./datalist";
import styles from "./Modal.module.css";
import { useAddUsersMutation } from "../../redux/OrenApi";
// import CheckBox from "../CheckBox/CheckBox";

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

  const answers = [
    { id: parseInt("1"), name: "Хорошо там, где мы есть!" },
    { id: parseInt("2"), name: "Обыкновенное чудо" },
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
      name: "Невероятные приключения в использовании законодательства по охране труда",
    },
    {
      id: parseInt("6"),
      name: "Добро пожаловать в IT, или посторонним вход воспрещен!",
    },
    { id: parseInt("7"), name: "Движение вверх" },
    {
      id: parseInt("8"),
      name: "Концертная программа «Открытие третьего трудового семестра»",
    },
    { id: parseInt("9"), name: "Оренбург" },
    { id: parseInt("10"), name: "Оренбург" },
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
      setSelectedAnswers([{}]);
    }
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
                    {/* <option value="">Выберите район</option>
                    <option value="г. Оренбург">г. Оренбург</option>
                    <option value="г. Бузулук">г. Бугуруслан</option>
                    <option value="г. Медногорск">г. Медногорск</option>
                    <option value="г. Новотроицк">г. Новотроицк</option>
                    <option value="г. Орск">г. Орск</option> */}
                  </select>
                </div>
                <div>
                  <h1>Выбранные ответы:</h1>
                  <ul>
                    {selectedAnswers.map((selectedId) => {
                      const selectedAnswer = answers.find(
                        (answer) => answer.id === selectedId
                      );
                      return <li key={selectedId}>{selectedAnswer?.name}</li>;
                    })}
                  </ul>

                  <h2>Доступные варианты ответов:</h2>
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
