import React from 'react';
// import './styles.css';
import Lottie from 'react-lottie';
import animationData from './106680-login-and-sign-up.json';
export default function Loginan() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={600}
          width={600}
        />
      </div>
    );
  }