import {CoffeeContext} from '../context/CoffeeContext'
import { useState, useContext } from 'react';

const SelectedCoffeeBean = () => {
  const [coffeeBean, setCoffeeBean] = useState({});
  const desiredBean = useContext(CoffeeContext);
  setCoffeeBean(desiredBean);
  
  return (
    <div className='selected-coffee'>
      <h2>{coffeeBean}</h2>
    </div>
  );

}

export default SelectedCoffeeBean;