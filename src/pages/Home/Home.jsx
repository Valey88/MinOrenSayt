import React from "react";
import style from "./Home.module.css";
import { YMaps, Map, GeoObject, Placemark } from "@pbe/react-yandex-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import EventBlock from "/src/components/EventBlock/EventBlock";
import Marquee from "react-fast-marquee";
import Countdown from "react-countdown";

//? https://stackoverflow.com/questions/45621506/yandex-disk-api-cant-make-request-with-access-token-node-js
//? https://oauth.yandex.ru/verification_code#access_token=y0_AgAAAABXDDJgAAu0RwAAAAEDXSp_AADjrTfk9cRHhaCH4WTB7CmGi6PWpg&token_type=bearer&expires_in=31533775&cid=uvhk86yf6daxn87286afc48rqw
//? https://disk.yandex.ru/client/disk/resources
//? https://oauth.yandex.ru/client/3e2b9d3c5b6749b6b3ea7611d5f6547c
//? https://github.com/Kolyaj/yandex-disk/blob/master/readme.md

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
// import { Modal } from "../../components/modal/Modal";
import { Modal } from "@mui/material";

const partners = [
  {
    path: "public/Gazprom.svg",
  },
  {
    path: "public/emblem.svg",
  },
];

const Completionist = () => <span>Регистрация завершена!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <p>
        До конца регистрации осталось:
        <br />
        <strong>
          {days} дн {hours} ч {minutes} мин {seconds} с
        </strong>
      </p>
    );
  }
};

let arr = [];
const directoryPath = "/new/";
fetch("https://cloud-api.yandex.net/v1/disk/resources/files", {
  method: "GET",
  headers: {
    Authorization:
      "OAuth y0_AgAAAABXDDJgAAu0RwAAAAEDXSp_AADjrTfk9cRHhaCH4WTB7CmGi6PWpg",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.items.forEach((item) => {
      arr.push(item.file);
    });
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
console.log(arr);

const Home = () => {
  return (
    <div className={style.Home}>
      <div className={style.all}>
        <div className={style.Center}>
          <div className={style.HomeContainer}>
            <div className={style.HomeHeaderBlock}>
              <div className={style.blockHeaderImg}>
                <div className={style.cards}>
                  <img src="/public/badge.svg" alt="" />
                </div>
                <div className={style.gerb}>
                  <img src="/public/emblem.svg" alt="" />
                </div>
              </div>
              <div className={style.HomeHeaderDescription}>
                {arr.map((arr) => (
                  <h2>{arr.path}</h2>
                ))}
                <h2>22 - 23 мая</h2>
                <p>
                  Оренбург <br />
                  ДКиС «Газовик»
                </p>
                <p>
                  <Countdown
                    date={Date.parse("30 Aug 2024 19:00:00 GMT")}
                    renderer={renderer}
                  />
                </p>
              </div>
              <div className={style.HomeFooterDescription}>
                <div className={style.HomeFooterDescriptionItem}>
                  <h2>Форум труда</h2>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/registration";
                    }}
                  >
                    Принять участие
                  </button>
                </div>
                <div>
                  <h2>«Живи и работай в Оренбуржье!»</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.aboutSection} id="purpose">
          <div className={style.heading}>
            <h2>Цели форума</h2>
          </div>
          <div className={style.Center}>
            <div className={style.aboutContainer}>
              <div className={style.aboutContent}>
                <div className={style.aboutContentItem1}>
                  <div>
                    <h2>Мы рады приветствовать вас</h2>
                    <p>
                      на платформе, где собраны специалисты, профессионалы и
                      всех, кто интересуется различными аспектами трудовой
                      деятельности. Наш форум создан для того, чтобы обеспечить
                      обмен знаниями, опытом и идеями в сфере труда. Наша цель -
                      создать инновационное и вдохновляющее сообщество,
                      способствующее обмену идеями, установлению новых контактов
                      и поиску решений для современных трудовых вызовов. Мы
                      стремимся к тому, чтобы
                    </p>
                  </div>
                </div>
                <div className={style.aboutContentItem2}>
                  <div className={style.aboutContentContainer}>
                    <div className={style.items}>
                      <div className={style.Item1}>
                        <h2>Участникам форума</h2>
                        <p>
                          Сможешь лучше понять себя, научишься развивать сильные
                          стороны и достигать целей
                        </p>
                      </div>
                      <div className={style.Item2}>
                        <h2>Партнёрам форума</h2>
                        <p>
                          Cистематизация и визуализация знаний, необходимых для
                          подготовки и проведения молодёжных образовательных
                          форумов
                        </p>
                      </div>
                      <img
                        className={style.image}
                        src="/public/aboutImage.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.eventSection} id="event">
          <div className={style.heading}>
            <h2>Мероприятия</h2>
          </div>
          <div className={style.Center}>
            <div className={style.eventContainer}>
              <div className={style.eventContent}>
                <div className={style.eventColumn}>
                  <EventBlock
                    color="blue"
                    eventList="\public\Мероприятия ДКиС «Газовик».docx"
                  >
                    ДКиС «Газовик»
                  </EventBlock>
                  <EventBlock
                    color="red"
                    eventList="\public\Мероприятия ОГАУ.docx"
                  >
                    Город профессий (ОГАУ)
                  </EventBlock>
                </div>
                <img className={style.eventList} src="\public\EventList.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className={style.mapSection} id="map">
          <div className={style.heading}>
            <h2>Карта мероприятий</h2>
          </div>
          <div className={style.Center}>
            <div className={style.mapContainer}>
              <YMaps>
                <Map
                  defaultState={{ center: [51.762413, 55.11635], zoom: 16 }}
                  className={style.map}
                  modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                >
                  <Placemark
                    properties={{
                      hintContent: "ДКиС «Газовик»",
                      balloonContentHeader: "Площадки проведения мероприятий:",
                      balloonContentBody: `
                      <ul>
                        <li>Холл ДКиС «Газовик»</li>
                        <li>Большой театрально-концертный зал</li>
                        <li>Малый театрально-концертный зал</li>
                        <li>Зал совещаний</li><li>Зимний сад</li>
                        <li>Стадион ДКиС «Газовик»</li>
                      </ul>
                      `,
                    }}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/public/logoMark.svg",
                      iconImageSize: [60, 60],
                      iconImageOffset: [-30, -60],
                    }}
                    defaultGeometry={[51.763885, 55.119018]}
                  />

                  <Placemark
                    properties={{
                      hintContent: "ОГАУ,  «Город профессий»",
                      balloonContentHeader: "Площадки проведения мероприятий:",
                      balloonContentBody: `
                      <ul>
                        <li>Площадка «Комплексная безопасность»</li>
                        <li>Площадка «Экономика и право»</li>
                        <li>Площадка «Ветеринарная медицины»</li>
                        <li>Площадка «Профессия инженер»</li>
                        <li>Площадка «Молодежная политика»</li>
                      </ul>
                      `,
                    }}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/public/logoMark.svg",
                      iconImageSize: [60, 60],
                      iconImageOffset: [-30, -60],
                    }}
                    defaultGeometry={[51.763149, 55.115344]}
                  />
                  <Placemark
                    properties={{
                      hintContent: "ОГАУ,  «Город профессий»",
                      balloonContentHeader: "Площадки проведения мероприятий:",
                      balloonContentBody: `
                      <ul>
                        <li>Площадка «Комплексная безопасность»</li>
                        <li>Площадка «Экономика и право»</li>
                        <li>Площадка «Ветеринарная медицины»</li>
                        <li>Площадка «Профессия инженер»</li>
                        <li>Площадка «Молодежная политика»</li>
                      </ul>
                      `,
                    }}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/public/logoMark.svg",
                      iconImageSize: [60, 60],
                      iconImageOffset: [-30, -55],
                    }}
                    defaultGeometry={[51.762709, 55.111921]}
                  />
                  <Placemark
                    properties={{
                      hintContent: "ОГАУ,  «Город профессий»",
                      balloonContentHeader: "Площадки проведения мероприятий:",
                      balloonContentBody: `
                      <ul>
                        <li>Площадка «Комплексная безопасность»</li>
                        <li>Площадка «Экономика и право»</li>
                        <li>Площадка «Ветеринарная медицины»</li>
                        <li>Площадка «Профессия инженер»</li>
                        <li>Площадка «Молодежная политика»</li>
                      </ul>
                      `,
                    }}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/public/logoMark.svg",
                      iconImageSize: [60, 60],
                      iconImageOffset: [-2, -70],
                    }}
                    defaultGeometry={[51.760786, 55.112532]}
                  />
                </Map>
              </YMaps>
            </div>
            <div className={style.underMap}>
              <p>ДКиС «Газовик»</p>
              <p>ОГАУ, «Город профессий»</p>
            </div>
          </div>
        </div>

        <div className={style.sliderSection} id="gallery">
          <div className={style.heading}>
            <h2>Галерея</h2>
          </div>
          <div className={style.sliderContainer}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {arr.map((arr, index) => (
                <SwiperSlide>
                  <img key={index} src={arr} />
                </SwiperSlide>
              ))}

              <SwiperSlide>
                <img src="/public/image 17.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/image 17.png" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className={style.partnerSection}>
          <div className={style.heading}>
            <h2>Партнёры</h2>
          </div>
          <div className={style.Center}>
            <div className={style.partner}>
              <Marquee speed={100} pauseOnClick="true">
                {partners.map((partner) => (
                  <img className={style.partnerIcon} src={partner.path} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
