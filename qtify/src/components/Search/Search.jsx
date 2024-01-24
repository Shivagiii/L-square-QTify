import React from 'react';
import { ReactComponent as SearchIcon} from "../../assests/Search_icon.svg"

import styles from './Search.module.css'
function Search() {
    const searchButton = (e) => {
        e.preventDefault();
    }
  return (
   <form className={styles.box} onSubmit={searchButton}>
    <input className={styles.input} placeholder='Search a album of your choice' required/>
    <button className={styles.searchIcon}  type='submit'>
     <SearchIcon/>
    </button>
   </form>
  )
}

export default Search