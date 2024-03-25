"use client"

import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';


const LottieAnimation = () => {
  return (
    <div>
      <DotLottiePlayer
        src="/contactUs.lottie"
        autoplay
        loop
        speed={0.5}
      >
      </DotLottiePlayer>
    </div>
  );
};

export default LottieAnimation;