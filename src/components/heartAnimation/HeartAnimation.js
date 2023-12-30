//CSS
import './HeartAnimation.css';

//MODULES AND COMPONENTS
import React from 'react';
import {Animated} from "react-animated-css";

//IMAGES
import heart from '../../images/heart.png'

function HeartAnimation() {
    return (
    <Animated animationIn="flash" animationOut="fadeOut" isVisible={false}>
        <img src={heart} className='Heart' alt='heart'></img>
    </Animated>
    );
  }
  
  export default HeartAnimation;