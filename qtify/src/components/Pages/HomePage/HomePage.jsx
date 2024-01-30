import React from 'react'
import Hero from '../../Hero/Hero'
import Section from '../../Section/Section'
import { useOutletContext } from 'react-router-dom';
function HomePage( ) {
    const {data} = useOutletContext();
    const {topAlbums, newAlbums} = data;
    console.log(newAlbums)
  return (
    <div>
        <Hero/>
        <Section header="Top Albums" data={topAlbums} type='albums' />
        <Section header="New Albums" data={newAlbums} type='albums'/>
    </div>
  )
}

export default HomePage