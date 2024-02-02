import React, {  useState } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";


function Section({ header, data, type }) {
 
  const [carousel, setCarousel] = useState(false);
 
  
console.log(data);
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.header}>{header}</p>
        <button
          className={styles.collapseBtn}
          onClick={() => setCarousel(!carousel)}
        >
          {!carousel ? "Show All" : "Collapse All"}
        </button>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {carousel ? (
            <div className={styles.showAll}>
              {data.map((ele) => (
                <Card data={ele} type={type} key={ele.id}/>
              ))}
            </div>
          ) : (
            <Carousel data={data} 
            renderComponent={(data)  => <Card data={data}  type={type}/>}/>
           
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
