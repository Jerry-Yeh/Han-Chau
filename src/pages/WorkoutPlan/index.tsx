import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useMachine } from '@xstate/react';

// import { machine } from '~/state/machine';

interface Props {
  children?: React.ReactNode;
}

const Exercise: React.FC<Props> = () => {
  // const location = useLocation();

  /** Animation */
  // const [displayLocation, setDisplayLocation] = useState(location);
  // const [transitionStage, setTransitionStage] = useState('animate-fadeIn');

  // const handleAnimationEnd = () => {
  //   if (transitionStage === 'animate-fadeOut') {
  //     setTransitionStage('animate-fadeIn');
  //     setDisplayLocation(location);
  //   }
  // };

  // useEffect(() => {
  //   if (location !== displayLocation) setTransitionStage('animate-fadeOut');
  // }, [location, displayLocation]);

  /** States */
  // const [current] = useMachine(machine);

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
