import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import logomark from '~/assets/img/logo-mark.svg';
import logo from '~/assets/img/logo.svg';
import HCProgress from '~/components/Progress';

interface Props {
    children?: React.ReactNode;
    onDone: () => void;
}

const Loading: React.FC<Props> = ({ onDone }) => {
    const { t } = useTranslation();

    const [showSlogan, setShowSlogan] = useState(false);
    const [progressPercentage, setProgressPercentage] = useState(0);

    useEffect(() => {
        const sloganDelayTimer = setTimeout(() => {
            setShowSlogan(true);
            setProgressPercentage(11);
        }, 800);

        const progressDelayTimer = setTimeout(() => {
            setProgressPercentage(1);
        }, 1600);

        const navigateDelayTimer = setTimeout(() => {
            onDone();
        }, 2400);

        return () => {
            clearTimeout(sloganDelayTimer);
            clearTimeout(progressDelayTimer);
            clearTimeout(navigateDelayTimer);
        };
    }, [onDone]);

    return (
        <div className='bg-secondary h-screen pb-10 flex flex-col items-center justify-between'>
            <HCProgress percentage={progressPercentage} />
            <div className='flex flex-col items-center'>
                <img src={logomark} alt='logomark' className='mb-6' />
                <span
                    className={`
            text-body-m text-placeholder
            ease-in duration-1000 ${showSlogan ? 'visible opacity-100' : 'invisible opacity-0'}`}
                >
                    {t('welcome.slogan')}
                </span>
            </div>
            <div>
                <img src={logo} alt='logo' />
            </div>
        </div>
    );
};

export default Loading;
