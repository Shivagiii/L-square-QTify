import React from "react";
import { Tooltip, Chip, Grid } from "@mui/material";
import styles from "./Card.module.css";

function Card({ data, type }) {
  
  // const title = "Bollywood";
  // const img =
  //   "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";
  // const follows = "100";

if(type === 'album')
  return (
    <Grid container gap='40px'>
      {data.map((item) => {
        const {title,follows,image} = item;
        return (
          <Grid item className={styles.card}>
            <Tooltip arrow>
              <img className={styles.cardImg} alt="piv" src={image} />
              <div className={styles.followInfo}>
                <Chip
                  label={`${follows} Follows`}
                  className={styles.chip}
                  size="small"
                />
              </div>
              <div className={styles.title}>{title}</div>
            </Tooltip>
          </Grid>
        );
      })}
    </Grid>
  );
else if(type === 'song')
return (
  <Grid container>
    {data.map((item) => {
      const {title,follows,image} = item;
      return (
        <div className={styles.card}>
          <Tooltip arrow>
            <img className={styles.cardImg} alt="piv" src={image} />
            <div className={styles.followInfo}>
              <Chip
                label={`${follows} likes`}
                className={styles.chip}
                size="small"
              />
            </div>
            <div className={styles.title}>{title}</div>
          </Tooltip>
        </div>
      );
    })}
  </Grid>
);
}

export default Card;
