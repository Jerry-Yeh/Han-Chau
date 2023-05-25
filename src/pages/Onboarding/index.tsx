import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/store/hook';

import Height from '~/pages/Onboarding/components/Height';
import Weight from '~/pages/Onboarding/components/Weight';
import Gender from '~/pages/Onboarding/components/Gender';
import Birth from '~/pages/Onboarding/components/Birth';
import Amount from '~/pages/Onboarding/components/Amount';
import Level from '~/pages/Onboarding/components/Level';
import Target from '~/pages/Onboarding/components/Target';
import Name from '~/pages/Onboarding/components/Name';
import Login from '~/pages/Onboarding/components/Login';
import Results from '~/pages/Onboarding/components/Results';
import HCHeader, { HCHeaderRegion } from '~/components/Header';
import HCProgress from '~/components/Progress';

import { Stage } from '~/enums/onboarding';

interface Props {
  children?: React.ReactNode;
}

const Onboarding: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (user.id) {
      navigate('/workout-plan');
    }
  }, [user.id, navigate]);

  /** Path & Style */
  const [nextPath, setNextPath] = useState('');
  const [progressClass, setProgressClass] = useState('');
  const [stage, setStage] = useState(Stage.HEIGHT);

  const toPrev = () => {
    const values = Object.values(Stage);
    const map = new Map(values.map((k, i) => [k, values[i - 1]]));
    if (stage === Stage.HEIGHT) {
      navigate('/');
    } else {
      setStage(map.get(stage) as Stage);
    }
  };

  const toNext = useCallback(() => {
    const values = Object.values(Stage);
    const map = new Map(values.map((k, i) => [k, values[i + 1]]));
    setStage(map.get(stage) as Stage);
  }, [stage]);

  const [renderComponent, setRenderComponent] = useState(<Height toNext={toNext} />);

  useEffect(() => {
    setNextPath('');

    switch (stage) {
      case Stage.HEIGHT:
        setRenderComponent(<Height toNext={toNext} />);
        setProgressClass('w-1/9');
        break;
      case Stage.WEIGHT:
        setRenderComponent(<Weight toNext={toNext} />);
        setProgressClass('w-2/9');
        break;
      case Stage.GENDER:
        setRenderComponent(<Gender toNext={toNext} />);
        setProgressClass('w-3/9');
        break;
      case Stage.BIRTH:
        setRenderComponent(<Birth toNext={toNext} />);
        setNextPath('/onboarding/amount');
        setProgressClass('w-4/9');
        break;
      case Stage.AMOUNT:
        setRenderComponent(<Amount toNext={toNext} />);
        setProgressClass('w-5/9');
        break;
      case Stage.LEVEL:
        setRenderComponent(<Level toNext={toNext} />);
        setProgressClass('w-6/9');
        break;
      case Stage.TARGET:
        setRenderComponent(<Target toNext={toNext} />);
        setProgressClass('w-7/9');
        break;
      case Stage.NAME:
        setRenderComponent(<Name toNext={toNext} />);
        setProgressClass('w-8/9');
        break;
      case Stage.LOGIN:
        setRenderComponent(<Login toNext={toNext} />);
        setProgressClass('w-full');
        break;
      case Stage.RESULTS:
        setRenderComponent(<Results />);
        setProgressClass('w-0');
        break;
      default:
        break;
    }
  }, [stage, toNext]);

  return (
    <div className='bg-secondary h-full'>
      {stage !== Stage.RESULTS && (
        <Fragment>
          <HCHeader
            size='s'
            prefix={<ArrowLeftIcon className='w-8 h-8' onClick={toPrev} />}
            suffix={nextPath && <button onClick={toNext}>{t('skip')}</button>}
          />
          <HCHeaderRegion behavior='fixed'>
            <HCProgress rateClass={progressClass} />
          </HCHeaderRegion>
        </Fragment>
      )}
      {renderComponent}
    </div>
  );
};

export default Onboarding;
