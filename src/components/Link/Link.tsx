import React from 'react';

import { LinkProps, LINK_TYPE } from '.';

const Link: React.FC<LinkProps> = ({ children, type = LINK_TYPE.PRIMARY }) => {
    const typeVariants = (type: LINK_TYPE.PRIMARY) =>
        ({
            [LINK_TYPE.PRIMARY]: 'text-highlight',
        }[type]);

    return <button className={`${typeVariants(type)} text-body-bold-s`}>{children}</button>;
};

export default Link;
