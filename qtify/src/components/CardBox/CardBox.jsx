import React from 'react'
import styles from './CardBox.module.css'; 
import Section from '../Section/Section';



function CardBox() {
  return (
    <div className={styles.box}>
        <Section header={'Top Albums'}/>
        <Section header={'New Albums'}/>
        

    </div>
  )
}

export default CardBox