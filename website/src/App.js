import React from 'react'
import './App.scss';
import Navbar from './Components/Navbar/Navbar.component';
import Hero from './Components/Hero/Hero.component';
import Body from './Components/Body/Body.component';
import Statistics from './Components/Statistics/Statistics.component';
import PreFooter from './Components/PreFooter/PreFooter.component';
import Footer from './Components/Footer/Footer.component';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Body/>
      <Statistics/>
      <PreFooter/>
      <Footer/>
    </div>
  )
}

export default App;
