import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useContext, useState } from 'react';

function Greenhouse() {

  const {themeName, setThemeName} = useTheme()

  if (themeName === "day") {
    setThemeName(dayImage);
  } else if(themeName === "night") {
      setThemeName(nightImage)
  }
  

  return (
   
    <section>
       <>
      <img className='greenhouse-img'
        src={themeName}
        alt='greenhouse'
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