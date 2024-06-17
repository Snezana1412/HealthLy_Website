// Import Swiper React components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import AppStore from "../../assets/images/app-store.png";
import GooglePlay from "../../assets/images/googleplay.png";
import ThreeDRotation from "../../assets/images/3-screens_d.png";
import SideMobile from "../../assets/images/side-mobile.png";

import AppleHealthBadge from "../../assets/images/Apple-Health-badge.png";
import { useEffect, useState } from "react";
import "./Slider.scss";

export default function Slider() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);
  //console.log(isLoaded);
  return (
    <Swiper
      className='mySwiper'
      modules={[Navigation, Pagination]}
      spaceBetween={250}
      // slidesPerView={1}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Grid container spacing={5}>
          <Grid item xs={1} sm={6} md={6}>
            <div className='slider-text'>
              <h1 className='fade-in'>FINALLY, there is HealthLy!</h1>

              <p className='fade-in'>
                The HealthLy app is a one-of-a-kind mobile health management
                system designed to assist you in taking care of your health and
                the well-being of your family, patients, or even pets.
              </p>

              <div className='button-group store-buttons slider-btn fade-in'>
                <div className='store-badges'>
                  <a href='https://apps.apple.com/us/app/healthly/id1536292632'>
                    <img src={AppStore} alt='' />
                  </a>
                </div>

                <div className='store-badges'>
                  <a href='https://play.google.com/store/apps/details?id=com.healthcarecentral.healthly'>
                    <img src={GooglePlay} alt='' />
                  </a>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={1} sm={6} md={6}>
            <div
              className='slider-image animated fade-in'
              data-animation=''
              data-delay=''>
              <img src={SideMobile} alt='' />
              <div className='health_badge button-group store-buttons slider-btn'>
                <div className='store-badges'>
                  <a href='https://apps.apple.com/us/app/healthly/id1536292632'>
                    <img src={AppleHealthBadge} alt='' />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid container spacing={2}>
          <Grid item xs={1} sm={6} md={6} transition='0.8s linear'>
            <div className='slider-text fade-in'>
              <h1 className=''>FINALLY, there is HealthLy!</h1>

              <p data-animation='fadeInDown' className=''>
                The HealthLy app is a one-of-a-kind mobile health management
                system designed to assist you in taking care of your health and
                the well-being of your family, patients, or even pets.
              </p>

              <div className='button-group store-buttons slider-btn fade-in'>
                <div className='store-badges'>
                  <a href='https://apps.apple.com/us/app/healthly/id1536292632'>
                    <img src={AppStore} alt='' />
                  </a>
                </div>

                <div className='store-badges'>
                  <a href='https://play.google.com/store/apps/details?id=com.healthcarecentral.healthly'>
                    <img src={GooglePlay} alt='' />
                  </a>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={1} sm={6} md={6}>
            <div
              className='slider-image animated fade-in'
              data-animation=''
              data-delay=''>
              <img src={ThreeDRotation} alt='' />
              <div className='health_badge button-group store-buttons slider-btn'>
                <div className='store-badges'>
                  <a href='https://apps.apple.com/us/app/healthly/id1536292632'>
                    <img src={AppleHealthBadge} alt='' />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </SwiperSlide>
    </Swiper>
  );
}
