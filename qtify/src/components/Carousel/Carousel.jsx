import React, { useEffect } from 'react'
import styles from './Carousel.module.css'; 
import { Navigation } from 'swiper';
import {Swiper,SwiperSlide,useSwiper} from "swiper/react";
import LeftCarousel from './LeftCarousel/LeftCarousel';
import RightCarousel from './RightCarousel/RightCarousel';
import "swiper/css"

const Control = ({data}) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0,1);
  },[data]);
  return <></>;

}

function Carousel({data , renderComponent}) {
  return (
    <div className={styles.wrapper}>
      <Swiper style={{padding:"0px 20px"}}
      initialSlide={0}
      modules={{Navigation}}
      slidesPerView={"auto"}
      spaceBetween={40}
      allowTouchMove

      >
        <Control data={data}/>
        <LeftCarousel/>
        <RightCarousel/>
        {
          data.map((ele) => (
            <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Carousel