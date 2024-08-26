import React, { ChangeEvent } from 'react';

import type { InputLongFullspaceProps } from '.';

const HCInputLongFullspace: React.FC<InputLongFullspaceProps> = (props) => {
    const handleAutoHeight = (element: ChangeEvent<HTMLTextAreaElement>) => {
        element.target.style.height = "48px";
        element.target.style.height = `${element.target.scrollHeight}px`;
    };

    return <div className=''>
        <label>
            {props.label && <div className="text-body-bold-s mb-2">{props.label}</div>}
            <textarea
                disabled={props.disabled}
                onInput={handleAutoHeight}
                onChange={props.onChange}
                rows={1}
                className={`w-full py-3.5 border-0 text-body-s focus:outline-none placeholder:text-body-s placeholder:text-placeholder rounded-lg duration-300 ${!props.disabled ? 'hover:bg-hover' : 'bg-primary'}`}
                placeholder={props.placeholder} />
            {props.prompt && <div className='text-body-xs text-tertiary'>{props.prompt}</div>}
        </label>
    </div>;
};

HCInputLongFullspace.defaultProps = {
    disabled: false,
};

export default HCInputLongFullspace;