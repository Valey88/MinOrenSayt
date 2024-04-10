import React from "react";
import { useState, useEffect } from "react";
import 

const Cytis = () => {
  const [city, setCity] = useState("");
  return (
    <div>
      <select
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        className={styles.modalInput}
      >
        <option value="Оренбург" key="">
          Оренбург
        </option>
      </select>
    </div>
  );
};

export default Cytis;
