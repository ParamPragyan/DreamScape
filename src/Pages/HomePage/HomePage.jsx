import React from "react";
import "./HomePage.scss";
// SwiperJs for Carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// Image imports
import headerLogo from "../../assets/navbrand2.png";

// Video Imports
import bgMp4 from "../../assets/hy.mp4";
import bgWebM from "../../assets/ezgif.com-gif-maker.webm";

import AskedQuestions from "../../components/QuestionPannel/AskedQuestions";

function HomePage(props) {
  return (
    <>
      <main className="homepage">
        <section className="header padding ">
          <video id="bg-video" autoPlay loop muted playsInline>
            {/* <source src={bgWebM} type="video/webm" /> */}
            <source src={bgMp4} type="video/mp4" />
          </video>
          <div className="header__brand " id="tsparticles">
            <h1 className="hidden-title">Wyvern Team</h1>
            <img src={headerLogo} alt="" className="header__brand__icon" />
            <div className="header__brand__description">
              <span className="">
                <span className="header__brand__description__span1 rounded-l-3xl pl-10 pr-5">DREAM</span>
                <span className="header__brand__description__span2 rounded-r-3xl pl-5 pr-10">SCAPE</span>
              </span>

              <span className="header__brand__description__span3">STUDIO</span>
            </div>
          </div>
        </section>

        {/* Wrapper for background */}
        <div className="wrapper-top">
          {/* Stats Section */}

          <section className="stats padding">
            <div class="video-container">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xUh0vdtOkpI?si=sEKpEWcMGNVGL2By" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="stats__container">
              <div className="stats__container__item">
                <h2 className="stats__container__item__counter">
                  <Ticker end={100} duration={1} suffix=" +" />
                </h2>
                <p className="stats__container__item__description">
                  Customers
                </p>
              </div>
              <div className="stats__container__border"></div>
              <div className="stats__container__item">
                <h2 className="stats__container__item__counter">
                  <Ticker end={100} duration={1} suffix=" +" />
                </h2>
                <p className="stats__container__item__description">
                  Assistents
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="services padding">
            <h2 className="services__heading">OUR SERVICES</h2>
            <div className="services__container">
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./ar.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    VR and AR Equipment
                  </h3>
                  <p className="services__container__item__description__details">
                  DreamScape Studio boasts a diverse range of VR and AR equipment, including cutting-edge headsets, motion controllers, and immersive software applications. Creators can utilize these resources to transport themselves into captivating virtual worlds and harness the power of augmented reality for their projects.
                  </p>
                </div>
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./cam.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Professional Camera and Lightning Gear
                  </h3>
                  <p className="services__container__item__description__details">
                  Our studio is equipped with a comprehensive array of professional-grade cameras, lenses, tripods, and stabilization equipment. Creators have access to DSLRs, mirrorless cameras, and camcorders to capture high-quality video and photography content.
                  </p>
                </div>
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./audio.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Audio Recording Studio
                  </h3>
                  <p className="services__container__item__description__details">
                  For exceptional audio quality, DreamScape Studio provides an audio recording studio equipped with microphones, soundproofing, and audio editing software. Creators can record voiceovers, podcasts, music, and other audio elements seamlessly.
                  </p>
                </div>
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./prop.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Accessories and Props
                  </h3>
                  <p className="services__container__item__description__details">
                  To enhance creativity, we provide a collection of accessories and props, including costumes, props, and set decorations, allowing creators to personalize their immersive experiences and content.
                  </p>
                </div>    
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./greenscreen.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Green Screen Studio
                  </h3>
                  <p className="services__container__item__description__details">
                  DreamScape Studio features a green screen studio with professional chroma keying equipment. Creators can use this space to shoot content against a green background and replace it with any virtual or digital backdrop during post-production.
                  </p>
                </div>
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./edit.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Editing Workstations
                  </h3>
                  <p className="services__container__item__description__details">
                  We provide high-performance editing workstations loaded with industry-standard software for video editing, graphic design, and 3D modeling. Creators can edit and enhance their content efficiently.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Features Section */}
        <section className="features padding">
          <h2 className="features__heading">OUR FEATURES</h2>
          <div className="features__container">
            <div className="features__container__item card-hover">
              <img
                src="./colab.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">
                Collaboration Chance
              </h3>
              <p className="features__container__item__details">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="features__container__item card-hover">
              <img
                src="./train.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">
                Equipment Training
              </h3>
              <p className="features__container__item__details">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="features__container__item card-hover">
              <img
                src="./service.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">
                Equipment Rental Services
              </h3>
              <p className="features__container__item__details">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="features__container__item card-hover">
              <img
                src="./clean.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">
                Maintenance and Upkeep
              </h3>
              <p className="features__container__item__details">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry..
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews padding">
          <h2 className="reviews__heading">OUR REVIEWS</h2>

          <div className="reviews__carousel">
            <img src="./btn-prev.png" alt="btn-prev" className="prev" />
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                  </div>
                  <p className="reviews__carousel__item__details">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to form a
                    great text body.
                  </p>
                  <h2 className="reviews__carousel__item__name">Jason Mark</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                  </div>
                  <p className="reviews__carousel__item__details">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                  <h2 className="reviews__carousel__item__name">Jason Mark</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                  </div>
                  <p className="reviews__carousel__item__details">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                  <h2 className="reviews__carousel__item__name">Subh</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                  </div>
                  <p className="reviews__carousel__item__details">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                  <h2 className="reviews__carousel__item__name">Param Pragyan</h2>
                </div>
              </SwiperSlide>
            </Swiper>
            <img src="./btn-next.png" alt="" className="next" />
          </div>
          <AskedQuestions/>

          


          {/* <Contact/> */}
          <a
            href="https://discord.com"
            target="_blank"
            className="btn btn-primary"
          >
            
            Contact Us
          </a>
        </section>
      </main>
    </>
  );
}
import "./HomePage.scss";
import Ticker from "../../components/Ticker/Ticker";
// import Contact from "../../components/Contact/Contact";

export default HomePage;
