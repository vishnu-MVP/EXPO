
import './App.css';
import { Link } from 'react-router-dom';
import {useSound} from 'use-sound';
import click from './sounds/intro.wav';
export const useButtonClickSound = () => {
  const [playClick] = useSound(click);
  return playClick;
};
function App() {

  const playClick = useButtonClickSound();
  const handleButtonClick = (buttonName) => {
    playClick();
    
  };
  return (
    <div className="maincon">
    <div className="container">
        <h1 id="ih1">Welcome To Our Expo</h1>
    </div>
    <div className="container">
        <Link to='/ticket'>
            <button type="submit" name="getick" className="rainbow rainbow-1" onClick={handleButtonClick}>Get Your Tickets!</button>
            </Link>
   
    </div>
</div>
  );
}

export default App;
