import React, { useState } from 'react';
import './Home.css';
import click from './sounds/animal.wav';
import sclick from './sounds/bird.mp3';
import fclick from './sounds/fish.wav';
import { useSound } from 'use-sound';
import { Link } from 'react-router-dom';
import prof from './propic.png';
import ele from './elephant.jpg';
import rhi from './rhino.jpg';
import pan from './panda.jpg';
import flam from './flamingo.jpg';
import shark from './shark.jpg';
import tuna from './tuna_fish.jpg'
import eag  from './eagle.jpg';
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

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('animal'); // Initial image index
  const imagesMap = {
    animal: [ele, rhi, pan],
    bird: [flam],
    fish: [shark,tuna]
  }; // Array of image URLs
  const contentMap = {
    animal: [
      "Welcome to the majestic world of the elephant, a symbol of strength, intelligence, and social complexity. Elephants, with their massive size and distinctive trunks, are found in diverse habitats across Africa and Asia. These gentle giants are known for their close-knit family groups, intricate communication skills, and remarkable memory. Did you know that elephants have the largest brains of any land animal, enabling them to exhibit a wide range of emotions and problem-solving abilities?",
      "Behold the majestic rhinoceros, a magnificent creature embodying strength and resilience. Rhinos, with their distinctive horns and thick skin, roam the savannas and forests of Africa and Asia. Despite their formidable appearance, these gentle giants are herbivores, feeding on grasses, fruits, and leaves. Did you know that rhinos have poor eyesight but a keen sense of smell and hearing, helping them navigate their surroundings? ",
      "Welcome to the enchanting world of the giant panda, a beloved icon of wildlife conservation and diplomacy. Pandas, with their distinctive black and white fur, inhabit the bamboo forests of China, where they peacefully munch on bamboo for the majority of their diet. These gentle giants are solitary creatures, known for their adorable appearance and playful behavior. Did you know that pandas have a specialized wrist bone that functions like an opposable thumb, helping them grip bamboo stems with precision?"
    ],
    bird: [
      "Enter the vibrant world of the flamingo, a dazzling bird known for its distinctive pink plumage and graceful demeanor. Flamingos are often found wading in shallow waters of tropical and subtropical regions, using their uniquely shaped bills to filter out small organisms from the water. Did you know that flamingos are highly social birds, often seen in large flocks that can number in the thousands? These gatherings serve both as a means of protection from predators and as a way to find mates. Despite their stunning appearance and sociable nature, flamingos face threats such as habitat loss and pollution of their wetland habitats"
    ],
    fish: [
      "Enter the fascinating realm of the shark, an apex predator of the ocean known for its sleek design and ancient lineage. Sharks, with their diverse shapes and sizes, play a crucial role in marine ecosystems, helping to regulate populations of prey species. These incredible creatures have evolved over millions of years to become perfectly adapted hunters, equipped with keen senses and a formidable array of teeth. Did you know that some shark species, like the great white shark, can detect the electromagnetic fields produced by their prey, helping them locate hidden animals? Despite their reputation, sharks are often misunderstood and face significant threats from overfishing, bycatch, and habitat degradation. Conservation efforts are vital to protect these magnificent predators and ensure the health of our oceans"
    ]
  };


  const aplayClick = useAnimalSound();
  const bplayClick = useBirdSound();
  const fplayClick = useFishSound();

  const ahandleButtonClick = () => {
    aplayClick();
    setCurrentImageIndex(0);
  };

  const bhandleButtonClick = () => {
    bplayClick();
  };

  const fhandleButtonClick = () => {
    fplayClick();
  };

  const handleLeftArrowClick = () => {
    // Update the current image index to display the previous image
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? imagesMap[activeCategory].length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    // Update the current image index to display the next image
    setCurrentImageIndex(prevIndex => (prevIndex === imagesMap[activeCategory].length - 1 ? 0 : prevIndex + 1));
  };


  const handleCategoryChange = (category) => {
    if (category === 'animal') {
      aplayClick()
    } else if (category === 'bird') {
      bplayClick()
    } else if (category === 'fish') {
      fplayClick()
    }
    setActiveCategory(category);
    setCurrentImageIndex(0); // Reset image index when changing category
  };

  return (
    <div className='hbody'>
      <Link to='/viewticket'>
        <button className="hprofile-icon">
          <img src={prof} alt="Profile" />
        </button>
      </Link>
      <center>
      <nav>
  <a href="#animal" onClick={() => handleCategoryChange('animal')}>Animals</a>
  <a href="#bird" onClick={() => handleCategoryChange('bird')}> Birds</a>
  <a href="#fish" onClick={() => handleCategoryChange('fish')}>Fishes</a>
</nav>
      </center>
      <Link to='/home'>
        <p className="larrow-container" onClick={handleLeftArrowClick}><span className="left-arrow larrow-move"></span></p>
      </Link>
      <Link to='/home'>
        <p className="rarrow-container" onClick={handleRightArrowClick}><span className="right-arrow rarrow-move"></span></p>
      </Link>
      <div className="hcontainer">
        <img src={imagesMap[activeCategory][currentImageIndex]} alt="current" id="himage" />
        <p className='pclass'>{contentMap[activeCategory][currentImageIndex]}</p>
      </div>
    </div>
  );
};


export default Home
