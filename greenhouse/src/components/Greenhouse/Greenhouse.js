import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useContext, useState } from 'react';

function Greenhouse() {

  const {themeName, setThemeName} = useTheme()
  const clickHandler = e => {
    e.preventDefault();
    // if (className="on") {
    //   className = "off"
    // } else { className = "on" }
    if (themeName === nightImage) {
      setThemeName(dayImage)
    } else {
      setThemeName(nightImage)
    }
  }
  return (
   
    <section>
       <>
      <img className='greenhouse-img'
        src={themeName}
        alt='greenhouse'
        onClick={clickHandler}
        />

      <LightSwitch />
      {/* onClick={clickHandler} /> */}
      <ClimateStats />
      </>
    </section>
    
  );
}

export default Greenhouse;

      /* if ({themeName} === 'day') 
        {<img 
          src={dayImage} 
          className='greenhouse-img' 
          alt='greenhouse' 
        />}
      else 
        {<img 
          src={nightImage} 
          className='greenhouse-img' 
          alt='greenhouse' 
        />} */