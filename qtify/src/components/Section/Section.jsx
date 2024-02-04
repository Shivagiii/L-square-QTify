import React, { useEffect, useState } from "react";
import {
  CircularProgress,
} from "@mui/material";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filter/Filter";

function Section({ header, data, type, songsFilter }) {
  const [carousel, setCarousel] = useState(false);
  const [filter, setFilter] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  useEffect(() => {
    if(songsFilter) { 
      console.log("filter Prev", filter)
      songsFilter().then((res) => {
        const dataa  = res.data;
        setFilter([...filter ,...dataa]);

      }
        
      )
        
        
      
    }
    console.log("filter After", filter);
  },[]);

  const showFilter = filter.length>1
  const cardsToRender = data.filter((card) =>
  showFilter && selectedFilterIndex !== 0
      ? card.genre.key === filter[selectedFilterIndex].key
      : card
  );

  //console.log(data);
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.header}>{header}</h3>
        {!showFilter ? (
          <button
            className={styles.collapseBtn}
            onClick={() => setCarousel(!carousel)}
          >
            {!carousel ? <h4>Show All</h4> : <h4>Collapse All</h4>}
          </button>
        ) : (
          <></>
        )}
      </div>
      {console.log(songsFilter)}
     {showFilter &&
     <div className={styles.filterWrapper}> 
     
     <Filter
        filter={filter}
        selectedFilterIndex={selectedFilterIndex}
        setSelectedFilterIndex={setSelectedFilterIndex}
      />
      </div>}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {carousel ? (
            <div className={styles.showAll}>
              {cardsToRender.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={cardsToRender}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
