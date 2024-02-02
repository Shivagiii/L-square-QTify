import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from './RightCarousel.module.css'
import {ReactComponent as RightArrow  } from './../../../assests/rightArrow.svg'

function RightCarousel() {
    const swiper= useSwiper();
    const[isEnd,setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isEnd)
        })
    },[])
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
        </div>
  )
}

export default RightCarousel