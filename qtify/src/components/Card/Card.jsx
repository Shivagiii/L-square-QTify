import React from "react";
import { Tooltip, Chip, Grid } from "@mui/material";
import styles from "./Card.module.css";

function Card({ data, type }) {
  if (type === "albums") {
    const { title, follows, image } = data;
    return (
      <Tooltip arrow title={`${data.songs.length} songs`}>
        <div  className={styles.card}>
          <div className={styles.wrapper}>
            <img className={styles.cardImg} alt="piv" src={image} />
            <div className={styles.followInfo}>
              <Chip
                label={`${follows} Follows`}
                className={styles.chip}
                size="small"
              />
            </div>
          </div>
          <div className={styles.titleBox}><div className={styles.title}>{title}</div></div>
        </div>
      </Tooltip>
    );
  } else if (type === "song") {
    const { title, follows, image } = data;
    return (
      <Grid container>
        {data.map((item) => {
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
}

export default Card;
