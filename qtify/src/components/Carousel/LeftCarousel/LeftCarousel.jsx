import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from './LeftCarousel.module.css';
import {ReactComponent as LeftArrow  } from './../../../assests/leftArrow.svg'

function LeftCarousel()  {
    const swiper= useSwiper();
    const[isBegin,setIsBegin] = useState(swiper.isBegin);

    useEffect(() => {
        swiper.on("slideChange",function(){
            setIsBegin(swiper.isBegin)
        })
    },[])
  return (
    <div className={styles.leftNavigation}>
        {!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} /> }
    </div>
  )
}

export default LeftCarousel