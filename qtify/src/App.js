import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import { fetchTopAlbums,fetchNewAlbums } from './components/Api/Api';
import { StyledEngineProvider } from '@mui/material';


function App() {
  const [data,setData] =useState([]);
  const generateData = (key,source) => {
    source().then((data) => {
      setData((prev) => {
       return { ...prev, [key] : data}
      })
    }
    )
  }
  useEffect(() => {
    generateData("topAlbums" ,fetchTopAlbums);
    generateData("newAlbums" ,fetchNewAlbums);
   


  },[])
  const {topAlbums = [],newAlbums = []} =data;
  //console.log("App",topAlbums)
  return (
    <>
      <StyledEngineProvider>
      <Navbar/>
      <Outlet context={ {data:{topAlbums,newAlbums}}}/>
      </StyledEngineProvider>
      

    </>
  )
}

export default App