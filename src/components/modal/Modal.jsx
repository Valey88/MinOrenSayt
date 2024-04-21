import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { rayons } from "./datalist";
import styles from "./Modal.module.css";

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
    "@media (max-width: 500px)": {
      width: "350px",
    },
    "@media (max-width: 2000px)": {
      width: "600px",
    },
  },
  height: {
    "@media (max-width: 500px)": {
      height: "800px",
    },
  },
};

export default function BasicModal({ city, setCity, rayon, setRayon }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addNewOrder = async () => {
    console.log({
      roomId,
      timeStart,
      durationHours,
      durationMinuts,
      summaryEvent,
      fio,
      email,
      phoneNumber,
    });
    if (
      roomId &&
      timeStart &&
      durationHours &&
      durationMinuts &&
      summaryEvent &&
      summaryEvent &&
      fio &&
      email &&
      phoneNumber
    ) {
      await postOrders({
        roomId,
        timeStart,
        durationHours,
        durationMinuts,
        summaryEvent,
        fio,
        email,
        phoneNumber,
      }).unwrap();
      setRoomId("");
      setTimeStart("");
      setDurationHours("");
      setDurationMinuts("");
      setSummaryEvent("");
      setFio("");
      setEmail("");
      setPhoneNumber("");
    }
  };
  console.log(city);
  console.log(rayon);
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
                    onChange={(e) => setTimeStart(e.target.value)}
                  />
                </div>
                <div className={styles.modalItemInput}>
                  <img src="/public/Mail.svg" alt="" />
                  <input
                    className={styles.modalInput}
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setTimeStart(e.target.value)}
                  />
                </div>
                <div className={styles.modalItemInput}>
                  <img src="/public/Phone.svg" alt="" />
                  <input
                    className={styles.modalInput}
                    type="text"
                    placeholder="Номер телефона"
                    onChange={(e) => setTimeStart(e.target.value)}
                  />
                </div>
                <div className={styles.modalItemInput}>
                  <img src="/public/Group.svg" alt="" />
                  <input
                    className={styles.modalInput}
                    placeholder="Организация"
                    type="text"
                    onChange={(e) => setTimeStart(e.target.value)}
                  />
                </div>
                <div className={styles.modalItemInput}>
                  <img src="/public/Stuff.svg" alt="" />
                  <input
                    className={styles.modalInput}
                    placeholder="Должность"
                    type="text"
                    onChange={(e) => setTimeStart(e.target.value)}
                  />
                </div>
                <div className={styles.modalItemInput}>
                  <select
                    value={city}
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
                    value={rayon}
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
                <div className={styles.modalItemInput}>
                  <button className={styles.modalButton} onClick={addNewOrder}>
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
