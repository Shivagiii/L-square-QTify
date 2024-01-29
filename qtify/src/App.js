import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CardBox from './components/CardBox/CardBox'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CardBox header={'Top Album'}/>

    </div>
  )
}

export default App