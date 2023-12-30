//CSS
import './App.css';

//MODULES AND COMPONENTS
import React from 'react';
import ParticlesComponent from './components/particlesComponent/ParticlesComponent';
import GalleryComponent from './components/galleryComponent/GalleryComponent';
import TimerComponent from './components/timerComponent/TimerComponent';

//IMAGES
import me_and_her from './images/me_and_her_2.png';
import leaves from './images/leaves.png'

function App() {
  return (
    <div className="App">
      <div className='Top-Banner'>
        <ParticlesComponent/>
        <img src={me_and_her} className='Me-And-Her-1' alt='me_and_her_1'/>
      </div>

      <div className='Division-Bar'>
        <img src={leaves} className='Leaves' alt='leaves'/>
      </div>

      <div className='Time-Together'>
        <h2 className='Time-Together-Title'>
          Tempo que estamos juntos
        </h2>
        <TimerComponent/>
      </div>

      <div className='Division-Bar'>
        <img src={leaves} className='Leaves' alt='leaves'/>
      </div>

      <div className='Gallery'>
        <h2 className='Gallery-Title'>
          Algumas das nossas melhores fotos!
        </h2>
        <GalleryComponent/>
      </div>
    </div>

  );
}

export default App;
