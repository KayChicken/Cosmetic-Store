import React from 'react';
import './global.scss'
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import SliderItems from './components/SliderItems/SliderItems';
import Advantages from './components/Advantages/Advantages';
import PickUp from './components/PickUp/PickUp';
import Concept from './components/Concept/Concept';
import Composition from './components/Composition/Composition';
import Bestsellers from './components/Bestsellers/Bestsellers';
import Care from './components/Care/Care';
import Test from './components/Test/Test';
import Expert from './components/Expert/Expert';


function App() {
  return (
    <>
      <Header/>
      <Promo/>
      <SliderItems/>
      <Advantages/>
      <PickUp/>
      <Concept/>
      <Composition/>
      <Bestsellers/>
      <Care/>
      <Test/>
      <Expert/>
    </>
  );
}

export default App;
