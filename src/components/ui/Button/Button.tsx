import React from "react";

import { MouseEventHandler, ReactNode, useMemo } from 'react';

import './Button.styles.css';

interface ButtonProps {
    additionalClasses?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { onClick, additionalClasses, children } = props;

    const classNames: string = useMemo(() => {
       return additionalClasses ? `button ${additionalClasses}` : "button";
    }, [additionalClasses])


    return (<button className={classNames} onClick={onClick}>{children}</button>)
}