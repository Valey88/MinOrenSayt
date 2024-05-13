import React from "react";
import style from "./Home.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import EventBlock from "/src/components/EventBlock/EventBlock";
import Marquee from "react-fast-marquee";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";

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
        Регистрация заканчивается <strong>31 августа </strong>
        <br />
        До конца регистрации осталось:
        <br />
        <strong>
          {days} дн {hours} ч {minutes} мин {seconds} с
        </strong>
      </p>
    );
  }
};

function getInitialZoom() {
  return window.innerWidth < 700 ? 15 : 16;
}

const Home = () => {
  const [filesList, setFilesList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cloud-api.yandex.net/v1/disk/resources/files",
          {
            method: "GET",
            headers: {
              Authorization:
                "OAuth y0_AgAAAAB11PL1AAu42gAAAAEDvRlVAACAdsUIsOFOMZ6DkqU69b1ktmXDaA",
            },
          }
        );
        const data = await response.json();
        const filteredFiles = data.items
          .filter((item) => item.path.includes("/MinTrudOrenForum"))
          .map((item) => item.file);
        setFilesList(filteredFiles);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchData();
  }, []);

  console.log(filesList);

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
                <h2>4 Сентября</h2>
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
                    <h2>
                      В Оренбургской области пройдет первый масштабный форум
                      труда «Живи и работай в Оренбуржье!»
                    </h2>
                    <p>
                      В рамках мероприятия в ДКиС «Газовик» будут обсуждаться
                      вопросы развития кадрового потенциала региона, обеспечения
                      безопасных условий труда, использования IT-технологий,
                      организована экспозиция ведущих предприятий Оренбуржья и
                      других регионов России. У молодежи вызовет интерес «Мир
                      профессий», который развернется на площадке Оренбургского
                      аграрного университета. Сопутствующими мероприятиями
                      Форума станут различные конкурсы, спортивные мероприятия,
                      территории народного промысла и приобщения к культуре
                      родного края.
                    </p>
                  </div>
                </div>
                <div className={style.aboutContentItem2}>
                  <div className={style.aboutContentContainer}>
                    <div className={style.items}>
                      <div className={style.Item1}>
                        <h2>Участникам форума</h2>
                        <p>
                          Деловая программа включает в себя более 50
                          мероприятий, в которых планируется участие 6 тыс.
                          работодателей, руководителей кадровых служб,
                          специалистов по охране труда, студентов ВУЗов и СПО,
                          школьников. Приглашаем Вас посетить Форум.
                        </p>
                      </div>
                      <div className={style.Item2}>
                        <h2>Партнёрам форума</h2>
                        <p>
                          Если вас заинтересовала возможность стать партнером
                          форум труда «Живи и работай в Оренбуржье!», вы можете
                          обратиться в министерство труда и занятости населения
                          Оренбургской области
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
                    Мир профессий (ОГАУ)
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
                  defaultState={{
                    center: [51.762413, 55.11635],
                    zoom: getInitialZoom(),
                  }}
                  className={style.map}
                  modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                >
                  <Placemark
                    properties={{
                      hintContent: "ДКиС «Газовик»",
                      balloonContentHeader: "Площадки проведения мероприятий:",
                      balloonContentBody: `
                      <ul>
                        <li>Пленарная сессия «Вектор развития кадровой политики: новые инструменты и возможности»</li>
                        <li>Сессия «Цифровое будущее охраны труда»</li> 
                        <li>Тренинг «Иван Васильевич не меняет профессию»</li>
                        <hr/>
                        <li>Торжественная церемония награждения победителей конкурсов</li> 
                        <hr/>
                        <li>Пленарная сессия «Основные акценты в изменениях трудового законодательства»</li>
                        <li>Сессия «IT-cервисы в решении кадровых задач»</li>
                        <hr/>
                        <li>Дискуссионная сессия «Встреча без галстуков»</li>
                        <li>Концертная программа «Открытие третьего трудового семестра»</li>
                        <li>Дискуссионная сессия «Охрана труда в бюджетных организациях»</li>
                        <li>Сессия «Особенности расследования несчастных случаев на производстве»</li>
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
                      hintContent: "ОГАУ,  «Мир профессий»",
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
                  {/* <Placemark
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
                      iconImageOffset: [-2, -70],
                    }}
                    defaultGeometry={[51.760786, 55.112532]}
                  />*/}
                </Map>
              </YMaps>
            </div>
            <div className={style.underMap}>
              <p>ДКиС «Газовик»</p>
              <p>ОГАУ, «Мир профессий»</p>
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
              {filesList.map((filesList, index) => (
                <SwiperSlide>
                  <img key={index} src={filesList} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={style.underSlider}>
              <a href="https://disk.yandex.ru/d/c3z4fBF-C2f93A" target="_blank">
                <p>
                  Скачать фотографии с форума вы можете на нашем Яндекс диске!
                </p>
                <img src="/public/diskLogo.svg" alt="" />
              </a>
            </div>
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
