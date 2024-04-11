import React,{useState} from 'react'
import  './Home.css';
import click from './sounds/animal.wav';
import sclick from './sounds/bird.mp3';
import fclick from './sounds/fish.wav';


import {useSound} from 'use-sound';
import { Link } from 'react-router-dom';
import prof from './propic.png';
export const useAnimalSound = () => {
  const [aplayClick] = useSound(click);
  return aplayClick;
};
export const useBirdSound = () => {
  const [bplayClick] = useSound(sclick);
  return bplayClick;
};
export const useFishSound = () => {
  const [fplayClick] = useSound(fclick);
  return fplayClick;
};
const backgrounds = {
  animal: 'url(forest8.jpg)', // Replace with your animal background image path
  bird: 'url(forest7.jpg)', // Replace with your bird background image path
  fish: 'url(Forest2.jpg)', // Replace with your fish background image path
};

const Home = () => {
  const [currentBackground, setCurrentBackground] = useState(backgrounds.bird)
  const aplayClick = useAnimalSound();
    const bplayClick = useBirdSound();
    const fplayClick = useFishSound();

    const ahandleButtonClick = (buttonName) => {
      if (buttonName){
        setCurrentBackground(backgrounds.animal);
        aplayClick();
      }
     
    };
    const bhandleButtonClick = (buttonName) => {
      if (buttonName){
        setCurrentBackground(backgrounds.bird);
      bplayClick();
      }
     
    };
    const fhandleButtonClick = (buttonName) => {
      if (buttonName){
        setCurrentBackground(backgrounds.fish);
        fplayClick();
      }
     
    };
  return (
    <div className='hbody' style={{ backgroundImage: currentBackground }}>
      <Link to='/viewticket'>
       <button className="hprofile-icon">
        <img src={prof} alt="Profile"/>
    </button>
    </Link>
    <center><nav>
        <button name="animal" onClick={ahandleButtonClick}><a href="#animal">Animals</a></button>
        <button name="bird" onClick={bhandleButtonClick}><a href="#bird"> Birds</a></button>
        
        <button name="fish" onClick={fhandleButtonClick}><a href="#fish">Fishes</a></button>
        
    </nav></center>
    <Link to='/'>
    <p class="larrow-container"><span class="left-arrow larrow-move"></span></p></Link>
   <Link to='/'> <p class="rarrow-container"><span class="right-arrow rarrow-move"></span></p></Link>
    </div>
  )
}

export default Home
