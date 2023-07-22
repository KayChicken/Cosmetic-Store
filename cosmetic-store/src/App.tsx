import React from 'react';
import './global.scss'
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import SliderItems from './components/SliderItems/SliderItems';
import Advantages from './components/Advantages/Advantages';
import PickUp from './components/PickUp/PickUp';
import Concept from './components/Concept/Concept';
import Composition from './components/Composition/Composition';


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
    
    </>
  );
}

export default App;
