import React, { useEffect, useState } from "react";
import {Grid } from "@mui/material";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import axios from "axios";

function Section({ header }) {

    const [data , setData] = useState([]);
    const [click,setClick] =useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        //console.log(data);
        setData(data);
      } catch (e) {
        console.log("error");
      }
    }
    fetchData();
  });

  return (
    <div >
      <div className={styles.sectionHeader}>
        <p className={styles.header}>{header}</p>
        <button   className={styles.collapseBtn}  onClick={() => setClick(!click)}>Collapse</button>
        
      </div>
      <div  className={click ? styles.showAll : styles.collapse}>
      <Card data={data} type={'album'}/>
      </div>
    </div>
  );
}

export default Section;
