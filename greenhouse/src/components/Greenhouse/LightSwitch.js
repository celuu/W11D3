import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext'


function LightSwitch() {

  const {themeName, setThemeName} = useTheme({})
  // const lightSwitchDay = document.getElementsByClassName("light-switch.day");
  // const lightSwitchNight = document.getElementsByClassName("light-switch.night");

  const clickHandler = (e) => {
    e.preventDefault();
  
    if (e.target.className === 'on') {
      setThemeName('day');
      // lightSwitchDay.className = 'light-switch day on'
      // lightSwitchNight.className = "light-switch night off";
    } else if(e.target.className === 'off'){
      setThemeName('night');
      // lightSwitchNight.className = "light-switch night on";
      // lightSwitchDay.className = "light-switch day off";
    }
  };

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={clickHandler}>
        DAY
      </div>
      <div className="off" onClick={clickHandler}>
        NIGHT
      </div>
    </div>
  );
}

export default LightSwitch;