import React from 'react'
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div>
      <nav className={styles.wrapper}>
        <Logo/>
        <Search/>
        <Button/>
      </nav>
    </div>
  ) 
}

export default Navbar