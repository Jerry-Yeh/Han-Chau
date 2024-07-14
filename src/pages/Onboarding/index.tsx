import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '~/store/hook';

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
import AuthService from '~/services/auth';
import { setUser } from '~/store/features/user';

import { Stage } from '~/enums/onboarding';

interface Props {
    children?: React.ReactNode;
}

const Onboarding: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.user.user);

    /** Path & Style */
    const [nextPath, setNextPath] = useState('');
    const [progressPercentage, setProgressPercentage] = useState(0);
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

    useEffect(() => {
        if (user.id && stage !== Stage.RESULTS) {
            navigate('/workout-plan');
        }
    }, [user.id, navigate, stage]);

    const [renderComponent, setRenderComponent] = useState(<Height toNext={toNext} />);

    useEffect(() => {
        setNextPath('');

        switch (stage) {
            case Stage.HEIGHT:
                setRenderComponent(<Height toNext={toNext} />);
                setProgressPercentage(11);
                break;
            case Stage.WEIGHT:
                setRenderComponent(<Weight toNext={toNext} />);
                setProgressPercentage(22);
                break;
            case Stage.GENDER:
                setRenderComponent(<Gender toNext={toNext} />);
                setProgressPercentage(33);
                break;
            case Stage.BIRTH:
                setRenderComponent(<Birth toNext={toNext} />);
                setNextPath('/onboarding/amount');
                setProgressPercentage(44);
                break;
            case Stage.AMOUNT:
                setRenderComponent(<Amount toNext={toNext} />);
                setProgressPercentage(55);
                break;
            case Stage.LEVEL:
                setRenderComponent(<Level toNext={toNext} />);
                setProgressPercentage(66);
                break;
            case Stage.TARGET:
                setRenderComponent(<Target toNext={toNext} />);
                setProgressPercentage(77);
                break;
            case Stage.NAME:
                setRenderComponent(<Name toNext={toNext} />);
                setProgressPercentage(88);
                break;
            case Stage.LOGIN:
                setRenderComponent(<Login />);
                setProgressPercentage(100);
                break;
            case Stage.RESULTS:
                setRenderComponent(<Results />);
                setProgressPercentage(0);
                break;
            default:
                break;
        }
    }, [stage, toNext]);

    /** Register and redirect */
    const setUserId = useCallback(async () => {
        const result = await AuthService.redirectResult();

        if (result) {
            const id = result.user.uid;

            flushSync(() => setStage(Stage.RESULTS));

            dispatch(setUser({ id }));
            await AuthService.saveUser({ ...user, id });
        }
    }, [user, dispatch]);

    useEffect(() => {
        setUserId();
    }, [setUserId]);

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
                        <HCProgress percentage={progressPercentage} />
                    </HCHeaderRegion>
                </Fragment>
            )}
            {renderComponent}
        </div>
    );
};

export default Onboarding;
