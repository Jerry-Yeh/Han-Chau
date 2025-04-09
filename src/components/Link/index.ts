import HCLink from './Link';

export enum LINK_TYPE {
    PRIMARY,
};

export interface LinkProps {
    children?: React.ReactNode;
    type?: LINK_TYPE;
    onClick?: () => void;
}

export default HCLink;
