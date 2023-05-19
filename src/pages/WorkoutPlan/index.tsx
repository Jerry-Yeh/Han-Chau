import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

const Exercise: React.FC<Props> = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('animate-fadeIn');

  const handleAnimationEnd = () => {
    if (transitionStage === 'animate-fadeOut') {
      setTransitionStage('animate-fadeIn');
      setDisplayLocation(location);
    }
  };

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage('animate-fadeOut');
  }, [location, displayLocation]);

  return (
    // <div className={`${transitionStage}`} onAnimationEnd={handleAnimationEnd}>
    //   <Outlet />
    // </div>
    <div>
      <Outlet />
    </div>
  );
};

export default Exercise;
