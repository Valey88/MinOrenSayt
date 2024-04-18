import React from "react";
import style from "./Home.module.css";
import { RouteButton, YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import EventBlock from "/src/components/EventBlock/EventBlock";

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

const Home = ({ city, setCity }) => {
  return (
    <div className={style.Home}>
      <div className={style.all}>
        <div className={style.Center}>
          <div className={style.HomeContainer}>
            <div className={style.HomeHeaderBlock}>
              <div className={style.blockHeaderImg}>
                <div className={style.cards}>
                  <img src="/public/2 3 (1).png" alt="" />
                </div>
                <div className={style.gerb}>
                  <img src="/public/image 15 (1).png" alt="" />
                </div>
              </div>
              <div className={style.HomeHeaderDescription}>
                <h2>22 - 23 мая</h2>
                <p>
                  Оренбург <br />
                  ДКиС “Газовик”
                </p>
              </div>
              <div className={style.HomeFooterDescription}>
                <div className={style.HomeFooterDescriptionItem}>
                  <h2>Форум труда в</h2>
                  <button>Принять участие</button>
                </div>
                <div>
                  <h2>Оренбургской области</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.aboutSection}>
          <div className={style.aboutContainer}>
            <div className={style.aboutHeader}>
              <h2>Цели форума</h2>
            </div>
            <div className={style.Center}>
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
                        src="/public/РЎР»РѕР№_13.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.programmSection}>
          <div className={style.aboutHeader}>
            <h2>Программа мероприятий</h2>
          </div>
          <div className={style.Center}>
            <div className={style.programmContainer}>
              <div className={style.programmContent}>
                <div className={style.programmColumn}>
                  <EventBlock color="blue">
                    Большой театрально-концертный зал
                  </EventBlock>
                  <EventBlock color="red">Зимний сад</EventBlock>
                </div>
                <div className={style.programmColumn}>
                  <EventBlock color="yellow">
                    <p>
                      Открытая площадка
                      <br /> ДКиС «Газовик»
                    </p>
                  </EventBlock>
                  <EventBlock color="green">Зал совещаний</EventBlock>
                  <EventBlock color="darkblue">
                    Малый театрально-концертный зал
                  </EventBlock>
                </div>
              </div>
              <div className={style.programmFooter}>
                <button>регистрация</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.mapSection}>
          <div className={style.aboutHeader}>
            <h2>Карта мероприятий</h2>
          </div>
          <div className={style.Center}>
            <div className={style.mapContainer}>
              <YMaps>
                <Map
                  defaultState={{ center: [51.762413, 55.11635], zoom: 17 }}
                  width={-1}
                  height={650}
                >
                  <Placemark
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/public/logoMark.svg",
                      iconImageSize: [60, 60],
                      iconImageOffset: [-30, -60],
                    }}
                    defaultGeometry={[51.763885, 55.119018]}
                  />
                  <Placemark
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/public/logoMark.svg",
                      iconImageSize: [60, 60],
                      iconImageOffset: [-30, -60],
                    }}
                    defaultGeometry={[51.763149, 55.115344]}
                  />
                  <Placemark
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/public/logoMark.svg",
                      iconImageSize: [60, 60],
                      iconImageOffset: [-30, -55],
                    }}
                    defaultGeometry={[51.762709, 55.111921]}
                  />
                  <Placemark
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
              <p>ДКиС “Газовик”</p>
            </div>
          </div>
        </div>
        <div className={style.sliderSection}>
          <div className={style.aboutHeader}>
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
              <SwiperSlide>
                <img src="/public/image 17.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/image 17.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/image 17.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/image 17.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/image 17.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/image 17.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/image 17.png" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
