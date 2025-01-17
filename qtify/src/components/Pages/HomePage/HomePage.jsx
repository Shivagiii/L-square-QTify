import React from 'react'
import Hero from '../../Hero/Hero'
import Section from '../../Section/Section'
import { useOutletContext } from 'react-router-dom';
import styles from './HomePage.module.css'
import { fetchFilter } from '../../Api/Api';
function HomePage( ) {
    const {data} = useOutletContext();
    const {topAlbums, newAlbums,songs} = data;
  //  console.log(filters)
  return (
    <div>
        <Hero/>
        <div className={styles.wrapper}>
        <Section header="Top Albums" data={topAlbums} type='albums' />
        <Section header="New Albums" data={newAlbums} type='albums'/>
        <Section header="Songs" data={songs} type='songs' songsFilter={fetchFilter}/>

        </div>
    </div>
  )
}

export default HomePage