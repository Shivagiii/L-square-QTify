import React from 'react';
import { ReactComponent as SearchIcon} from "../../assests/Search_icon.svg"

import styles from './Search.module.css'
function Search() {
    const searchButton = (e) => {
        e.preventDefault();
    }
  return (
   <form className={styles.box} onSubmit={searchButton}>
    <input className={styles.input} placeholder='Search a song of your choice'/>
    <button className={styles.searchIcon} >
     <SearchIcon/>
    </button>
   </form>
  )
}

export default Search