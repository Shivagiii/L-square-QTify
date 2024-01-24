import React from 'react'
import styles from './Button.module.css'
function Button({button}) {
  return (
    <button className={styles.button}>{button}</button>
  )
}

export default Button