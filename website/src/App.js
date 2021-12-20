import React from 'react'
import './App.scss';
import Navbar from './Components/Navbar/Navbar.component';
import Hero from './Components/Hero/Hero.component';
import Body from './Components/Body/Body.component';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Body/>
    </div>
  )
}

export default App;
