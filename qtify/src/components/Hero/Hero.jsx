import React from 'react';
import styles from './Hero.module.css'
import headPhone from '../../assests/vibrating-headphone.png'

function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.heroBox}>
           <div className={styles.heroTitle}>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
           </div>
            <img src={headPhone} alt="headPhone"/>

        </div>
    </div>
  )
}

export default Hero