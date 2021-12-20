import React from 'react'
import './App.scss';
import Navbar from './Components/Navbar/Navbar.component';
import Hero from './Components/Hero/Hero.component';
import Body from './Components/Body/Body.component';
import Statistics from './Components/Statistics/Statistics.component';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Body/>
      <Statistics/>
    </div>
  )
}

export default App;
